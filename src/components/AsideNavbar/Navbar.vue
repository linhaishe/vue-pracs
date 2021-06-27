<template>
  <el-aside width="200px">
    <div class="logo">
      <img src="../../../src/assets/tooth.png" alt="" />
      <div>
        <h2>Zendenta</h2>
        <p>Mordern Dental Clinic</p>
      </div>
    </div>
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"
          ><i class="el-icon-message"></i>
          <router-link to="/patient">Patient List</router-link></template
        >
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"
          ><i class="el-icon-menu"></i
          ><router-link to="/message">Message</router-link></template
        >
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"
          ><i class="el-icon-setting"></i
          ><router-link to="/test">Payment Information</router-link></template
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
  margin-top: 10px;
  margin-bottom: 20px;
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
</style>
