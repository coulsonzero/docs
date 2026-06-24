// Cloudflare Worker - IP 去重访客计数器
// 部署: npx wrangler deploy

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

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
      // 全站 key（汇总所有页面）
      const totalPvKey = `total_pv:${site}`;
      const totalUvKey = `total_uv:${site}`;
      const totalIpKey = `total_ips:${site}`;

      // --- 单页 PV ---
      const pvStr = await env.COUNTER.get(pvKey);
      const pv = (parseInt(pvStr) || 0) + 1;

      // --- 全站 PV ---
      const totalPvStr = await env.COUNTER.get(totalPvKey);
      const totalPv = (parseInt(totalPvStr) || 0) + 1;

      // --- 单页 UV: 按 IP 去重 ---
      const ipDataStr = await env.COUNTER.get(ipKey);
      let ipData = {};
      if (ipDataStr) {
        try { ipData = JSON.parse(ipDataStr); } catch(e) {}
      }

      const now = Date.now();
      const DAY_MS = 24 * 60 * 60 * 1000;

      for (const [storedIp, timestamp] of Object.entries(ipData)) {
        if (now - timestamp > DAY_MS) delete ipData[storedIp];
      }

      const isNewUV = !ipData[ip];
      let uv;

      if (isNewUV) {
        ipData[ip] = now;
        const uvStr = await env.COUNTER.get(uvKey);
        uv = (parseInt(uvStr) || 0) + 1;
      } else {
        const uvStr = await env.COUNTER.get(uvKey);
        uv = parseInt(uvStr) || 0;
      }

      // --- 全站 UV: 独立 IP 去重 ---
      const totalIpDataStr = await env.COUNTER.get(totalIpKey);
      let totalIpData = {};
      if (totalIpDataStr) {
        try { totalIpData = JSON.parse(totalIpDataStr); } catch(e) {}
      }

      for (const [storedIp, timestamp] of Object.entries(totalIpData)) {
        if (now - timestamp > DAY_MS) delete totalIpData[storedIp];
      }

      const isNewTotalUV = !totalIpData[ip];
      let totalUv;

      if (isNewTotalUV) {
        totalIpData[ip] = now;
        const totalUvStr = await env.COUNTER.get(totalUvKey);
        totalUv = (parseInt(totalUvStr) || 0) + 1;
      } else {
        const totalUvStr = await env.COUNTER.get(totalUvKey);
        totalUv = parseInt(totalUvStr) || 0;
      }

      // --- 写入 KV ---
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

      return new Response(JSON.stringify({
        pv,            // 当前页面 PV
        uv,            // 当前页面 UV
        totalPv,       // 全站 PV
        totalUv,       // 全站 UV
        isNewUV,
      }), {
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }
  },
};
