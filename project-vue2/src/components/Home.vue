<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />
      <el-container>
        <Breadcrumb />
        <el-main>
          <div class="cont">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './common/Headere.vue'
import Footer from './common/Footer.vue'
import Menu from './common/Menu.vue'
import Breadcrumb from './common/Breadcrumb.vue'

export default {
  data() {
    return {}
  },
  components: {
    Header,
    Footer,
    Menu,
    Breadcrumb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .cont {
      margin: 20px 0;
    }
  }
}
</style>
