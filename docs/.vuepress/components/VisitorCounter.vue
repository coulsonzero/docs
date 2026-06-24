<template>
  <div class="visitor-counter">
    <span class="counter-item">
      👁️ 总访问量：
      <span id="busuanzi_value_site_pv">--</span> 次
    </span>
    <span class="counter-divider">|</span>
    <span class="counter-item">
      👤 访客数：
      <span id="busuanzi_value_site_uv">--</span> 人
    </span>
    <span class="counter-divider">|</span>
    <span class="counter-item">
      📄 本页阅读：
      <span id="busuanzi_value_page_pv">--</span> 次
    </span>
  </div>
</template>

<script>
export default {
  name: "VisitorCounter",
};
</script>
