<template>
  <div class="index">
    <div class="title"></div>
    <div class="info">
      <el-button round @click="gotoHome">开始</el-button>
    </div>
    <div class="bottom">
      Copyright © 2020. Crafted with Caven Chen.
    </div>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data() {
    return {}
  },
  methods: {
    gotoHome() {
      this.$router.push('home')
    }
  }
}
</script>
<style lang="scss">
.index {
  .info {
    .el-button {
      width: 180px;
      z-index: 1000;
      background: rgba(39, 39, 39, 0.5);
      border-color: #11a0f3;
      color: #fff;
    }
  }
}
</style>
<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url('../assets/images/bg.jpg') no-repeat;
  background-size: cover;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
  .title {
    color: #fff;
    font-size: 25px;
    margin: 20px 30px;
    font-style: oblique;
    img {
      display: inline-block;
      vertical-align: middle;
    }
    .desc {
      margin-top: -7px;
      padding-left: 79px;
      color: #fff;
      font-size: 20px;
    }
  }

  .info {
    height: calc(100% - 230px);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .bottom {
    width: 100%;
    position: absolute;
    bottom: 15px;
    left: 0;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
  }
}
</style>
