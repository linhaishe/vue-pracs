<template>
  <el-aside width="210px">
    <div class="logo">
      <img src="../../../src/assets/tooth.png" alt="" />
      <div>
        <h2>Zendenta</h2>
        <p>Mordern Dental Clinic</p>
      </div>
      <img class="menu" src="../../../src/assets/menu.png" alt="" />
    </div>
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"
          ><i class="el-icon-user"></i>
          <router-link to="/patient">Patient List</router-link></template
        >
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"
          ><i class="el-icon-chat-dot-round"></i
          ><router-link to="/message">Message</router-link></template
        >
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"
          ><i class="el-icon-money"></i
          ><router-link to="/test">Payment Information</router-link></template
        >
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"
          ><i class="el-icon-money"></i
          ><router-link to="/test">Overview</router-link></template
        >
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"
          ><i class="el-icon-money"></i
          ><router-link to="/test">Setting</router-link></template
        >
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"
          ><i class="el-icon-money"></i
          ><router-link to="/test">Calendar</router-link></template
        >
      </el-submenu>
    </el-menu>
    <router-view />
  </el-aside>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 20px;
  border-right: 1px solid #e6e6e6;
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

.logo p {
  color: lightgray;
  font-size: 12px;
}
.logo .menu {
  width: 20px;
  height: 20px;
}
</style>
