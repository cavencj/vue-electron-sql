<template>
  <div class="ly-content">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'LyContent',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.ly-content {
  position: relative;
  width: 100%;
  height: calc(100% - 60px);
  overflow: hidden;
  display: flex;
}
</style>
