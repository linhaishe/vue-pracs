<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"
          ><i class="el-icon-message"></i>
          <router-link to="/patient">导航一</router-link></template
        >
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"
          ><i class="el-icon-menu"></i
          ><router-link to="/message">导航二</router-link></template
        >
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"
          ><i class="el-icon-setting"></i
          ><router-link to="/test">导航三</router-link></template
        >
      </el-submenu>
    </el-menu>
    <router-view />
  </el-aside>
</template>
