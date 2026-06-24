<template>
  <div class="visitor-counter">
    <span class="counter-item">
      👁️ 总访问量：
      <span class="counter-value">{{ totalPv }}</span> 次
    </span>
    <span class="counter-divider">|</span>
    <span class="counter-item">
      👤 访客数(IP)：
      <span class="counter-value">{{ totalUv }}</span> 人
    </span>
    <span>
      <span>开始统计时间：</span>
      <span>2026-06-24</span>
    </span>
  </div>
</template>

<script>
const COUNTER_API = "https://counter.docs-coulsonzero.workers.dev";
const CACHE_KEY = "visitor_counter_cache";
const CACHE_TTL = 5 * 60 * 1000; // 本地缓存 5 分钟

export default {
  name: "VisitorCounter",
  data() {
    return {
      totalPv: "-",
      totalUv: "-",
    };
  },
  mounted() {
    this.reportAndFetch();
  },
  methods: {
    async reportAndFetch() {
      try {
        // ★ 先读缓存，立即显示，避免空白等待
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          try {
            const data = JSON.parse(cached);
            if (Date.now() - data._time < CACHE_TTL) {
              this.totalPv = data.totalPv;
              this.totalUv = data.totalUv;
            }
          } catch (e) {}
        }

        // ★ 后台发请求，静默更新数据
        const res = await fetch(COUNTER_API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            site: window.location.hostname,
            path: window.location.pathname,
          }),
        });
        const data = await res.json();
        if (data.totalPv !== undefined) this.totalPv = data.totalPv;
        if (data.totalUv !== undefined) this.totalUv = data.totalUv;

        // 更新缓存
        data._time = Date.now();
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      } catch (e) {
        console.warn("计数器请求失败:", e);
        // 如果有缓存，即使过期了也先用着
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          try {
            const data = JSON.parse(cached);
            if (this.totalPv === "-") this.totalPv = data.totalPv;
            if (this.totalUv === "-") this.totalUv = data.totalUv;
          } catch (e2) {}
        }
      }
    },
  },
};
</script>
