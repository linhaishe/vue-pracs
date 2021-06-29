<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import AppNavbar from "./components/AsideNavbar/Navbar.vue";

export default {
  components: {
    //AppNavbar,
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(5).fill(item),
    };
  },
};
</script>

<style lang="less">
@import url("//unpkg.com/element-ui@2.15.2/lib/theme-chalk/index.css");
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
/* box-sizing and font sizing */
*,
*::before,
*::after {
  box-sizing: inherit;
}
/*In order to make that reset easier and more intuitive, you can use the inheriting snippet up at the top there, and the inheriting will be preserved.*/
/*The inherit keyword specifies that a property should inherit its value from its parent element.*/
html {
  box-sizing: border-box;

  /* Set font size for easy rem calculations
     * default document font size = 16px, 1rem = 16px, 100% = 16px
     * (100% / 16px) * 10 = 62.5%, 1rem = 10px, 62.5% = 10px
    */
  /* font-size: 62.5%; */
  scroll-behavior: smooth;
}
html,
body {
  height: 100%;
  width: 1005;
}
#app {
  width: 100%;
  height: 100%;
}

.el-header {
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-menu {
  height: 100%;
}
// .el-icon-arrow-down {
//   &::before {
//     display: none;
//   }
// }

#app a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}
</style>
