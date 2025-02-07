<template>
  <div class="footer">
    TraineesHomepage © 2024~{{new Date().getFullYear()}} |
    <a href="https://beian.miit.gov.cn">
      黔ICP备19007557号 </a>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
  position: absolute;
  padding: 10px;
  text-align: center;
  width: 100%;
  backdrop-filter: blur(var(--card_filter));
  -webkit-backdrop-filter: blur(var(--card_filter));
  background: var(--item_bg_color);
  color: var(--footer_text_color);
  font-size: 13px;
  bottom: 0;
}
</style>