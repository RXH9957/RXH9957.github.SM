<template>
  <div class="header">
    <el-header>
      <div class="title">系统名字</div>
      <div>{{ name }}</div>
    </el-header>
  </div>
</template>

<script>
import { getToken } from '../../utils/setToken.js'
export default {
  data() {
    return {
      name: ''
    }
  },
  created() {
    this.name = getToken('username')
  }
}
</script>

<style lang="less" scoped>
.header {
  .el-header {
    background: #409eff;
    color: #fff;
    display: flex;
    justify-content: space-between;
    .tltle {
      width: 200px;
      font-size: 24px;
    }
  }
}
</style>
