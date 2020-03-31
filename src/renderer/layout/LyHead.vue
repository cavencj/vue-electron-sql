<template>
  <div class="ly-head"></div>
</template>
<script>
export default {
  name: 'LyHead',
  data() {
    return {
      is3d: true
    }
  },
  computed: {},
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
.ly-head {
  height: 60px;
  background-image: linear-gradient(-180deg, #393939 0%, #2d2d2d 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
</style>
