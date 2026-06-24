// Cloudflare Worker - IP 去重访客计数器
// 部署: npx wrangler deploy

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 处理 CORS 预检请求
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    // 只允许 POST
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    // 获取真实客户端 IP（Cloudflare 自动注入）
    const ip = request.headers.get("CF-Connecting-IP") || "unknown";

    try {
      const body = await request.json();
      const pagePath = body.path || "/";
      const site = body.site || "default";

      // KV key 格式
      const pvKey = `pv:${site}:${pagePath}`;
      const uvKey = `uv:${site}:${pagePath}`;
      const ipKey = `ips:${site}:${pagePath}`;
      const totalPvKey = `total_pv:${site}`;
      const totalUvKey = `total_uv:${site}`;
      const totalIpKey = `total_ips:${site}`;

      // ★ 关键优化：所有 6 个 KV 读取并行执行，只需 1 次网络往返
      const [pvStr, totalPvStr, ipDataStr, totalIpDataStr, uvStr, totalUvStr] =
        await Promise.all([
          env.COUNTER.get(pvKey),
          env.COUNTER.get(totalPvKey),
          env.COUNTER.get(ipKey),
          env.COUNTER.get(totalIpKey),
          env.COUNTER.get(uvKey),
          env.COUNTER.get(totalUvKey),
        ]);

      // --- 计算 PV ---
      const pv = (parseInt(pvStr) || 0) + 1;
      const totalPv = (parseInt(totalPvStr) || 0) + 1;

      // --- 单页 UV 去重 ---
      let ipData = {};
      if (ipDataStr) {
        try { ipData = JSON.parse(ipDataStr); } catch (e) {}
      }

      const now = Date.now();
      const DAY_MS = 24 * 60 * 60 * 1000;

      // 清理过期 IP（超过 24 小时）
      for (const [storedIp, timestamp] of Object.entries(ipData)) {
        if (now - timestamp > DAY_MS) delete ipData[storedIp];
      }

      const isNewUV = !ipData[ip];
      let uv;
      if (isNewUV) {
        ipData[ip] = now;
        uv = (parseInt(uvStr) || 0) + 1;
      } else {
        uv = parseInt(uvStr) || 0;
      }

      // --- 全站 UV 去重 ---
      let totalIpData = {};
      if (totalIpDataStr) {
        try { totalIpData = JSON.parse(totalIpDataStr); } catch (e) {}
      }

      for (const [storedIp, timestamp] of Object.entries(totalIpData)) {
        if (now - timestamp > DAY_MS) delete totalIpData[storedIp];
      }

      const isNewTotalUV = !totalIpData[ip];
      let totalUv;
      if (isNewTotalUV) {
        totalIpData[ip] = now;
        totalUv = (parseInt(totalUvStr) || 0) + 1;
      } else {
        totalUv = parseInt(totalUvStr) || 0;
      }

      // --- 并行写入 KV ---
      const writes = [
        env.COUNTER.put(pvKey, String(pv)),
        env.COUNTER.put(totalPvKey, String(totalPv)),
      ];
      if (isNewUV) {
        writes.push(env.COUNTER.put(uvKey, String(uv)));
        writes.push(env.COUNTER.put(ipKey, JSON.stringify(ipData)));
      }
      if (isNewTotalUV) {
        writes.push(env.COUNTER.put(totalUvKey, String(totalUv)));
        writes.push(env.COUNTER.put(totalIpKey, JSON.stringify(totalIpData)));
      }
      await Promise.all(writes);

      return new Response(
        JSON.stringify({
          pv,
          uv,
          totalPv,
          totalUv,
          isNewUV,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            // 添加缓存头，减少重复请求
            "Cache-Control": "public, max-age=10",
          },
        }
      );
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  },
};
