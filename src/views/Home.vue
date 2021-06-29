<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <!-- <el-header height="'0'">
      <div class="nav-left">
        <img src="../../src/assets/Overview.png" alt="" />
        <span class="page"><strong>Dashboard Overview</strong></span>
      </div>
      <div class="nav-right">
        <el-input
          class="searchInput"
          clearable
          placeholder="Search"
          prefix-icon="el-icon-search"
          v-model="input2"
          size="small"
        >
        </el-input>
        <el-dropdown style="text-align: right">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Check</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <i style="text-align: right" class="el-icon-bell"></i>
      </div>
    </el-header> -->

    <el-container>
      <el-aside width="210px">
        <div class="logo">
          <img src="../../src/assets/tooth.png" alt="" />
          <div>
            <h2>Zendenta</h2>
            <p>Mordern Dental Clinic</p>
          </div>
          <img class="menu" src="../../src/assets/menu.png" alt="" />
        </div>
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-odometer"></i
              ><router-link to="/home/overview">Overview</router-link></template
            >
          </el-submenu>
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-user"></i>
              <router-link to="/home/patient"
                >Patient List</router-link
              ></template
            >
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-chat-dot-round"></i
              ><router-link to="/home/message">Message</router-link></template
            >
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-money"></i
              ><router-link to="/test"
                >Payment Information</router-link
              ></template
            >
          </el-submenu>

          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-guide"></i
              ><router-link to="/home/test">Setting</router-link></template
            >
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-date"></i
              ><router-link to="/home/test">Calendar</router-link></template
            >
          </el-submenu>
        </el-menu>
        <div class="nav-bottom">
          <div class="help">
            <i class="el-icon-warning-outline"></i>
            <span><strong>Help ?</strong></span>
          </div>
          <div class="doctorsCard">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <div>
              <h5>Drg.Adam H.</h5>
              <p><strong>Dentist</strong></p>
            </div>
            <i class="el-icon-more"></i>
          </div>
        </div>
      </el-aside>

      <el-main style="padding: 0"> <router-view></router-view> </el-main>
    </el-container>
  </el-container>
</template>

<script scope>
//import AppNavbar from "./components/AsideNavbar/Navbar.vue";

export default {
  components: {},
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
  width: 100;
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

.logo,
.doctorsCard {
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 20px;
  border-right: 1px solid #e6e6e6;
}
.doctorsCard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #e6e6e6;
}

.logo img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-left: 10px;
}

.logo h2,
.logo p {
  margin: 0;
}

.logo p,
.doctorsCard p {
  color: lightgray;
  font-size: 12px;
}

.doctorsCard p {
  margin-top: 10px;
}

.doctorsCard i {
  color: lightgray;
}

.logo .menu {
  width: 20px;
  height: 20px;
}

.el-menu {
  height: 75%;
}

.help {
  color: darkgray;
  padding: 15px;
  border-right: 1px solid #e6e6e6;
}

.help span {
  margin-left: 20px;
  font-size: 12px;
}

.el-avatar {
  width: 65px;
  height: 65px;
}

.el-menu .el-icon-arrow-down:before {
  display: none;
}
</style>
