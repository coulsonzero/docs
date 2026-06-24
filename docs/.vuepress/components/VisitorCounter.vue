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
    <span class="counter-divider">|</span>
    <span class="counter-item">
      📄 本页阅读：
      <span class="counter-value">{{ pv }}</span> 次
    </span>
    <span>
      开始统计时间：
      <span>2026-06-24</span>
    </span>
  </div>
</template>

<script>
const COUNTER_API = "https://counter.docs-coulsonzero.workers.dev";

export default {
  name: "VisitorCounter",
  data() {
    return {
      totalPv: "-",
      totalUv: "-",
      pv: "-",
    };
  },
  mounted() {
    this.reportAndFetch();
  },
  methods: {
    async reportAndFetch() {
      try {
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
        if (data.pv !== undefined) this.pv = data.pv;
      } catch (e) {
        console.warn("计数器请求失败:", e);
      }
    },
  },
};
</script>
