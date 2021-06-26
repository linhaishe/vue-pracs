<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
      <app-navbar></app-navbar>
      <router-link to="/"></router-link>
      <router-link to="/message"></router-link>
      <router-link to="/patient"></router-link>
      <router-view />
    </el-container>
  </div>
</template>
<script>
import AppNavbar from "./components/AsideNavbar/Navbar.vue";

export default {
  components: {
    AppNavbar,
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>

<style lang="less">
@import url("//unpkg.com/element-ui@2.15.2/lib/theme-chalk/index.css");
html,
body {
  margin: 0 auto;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-menu {
  height: 100%;
}
.el-icon-arrow-down {
  &::before {
    display: none;
  }
}
</style>
