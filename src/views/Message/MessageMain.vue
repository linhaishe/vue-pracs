<template>
  <el-container style="display: block">
    <patient-header></patient-header>
    <h1>message</h1>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">黄金糕</el-dropdown-item>
        <el-dropdown-item command="b">狮子头</el-dropdown-item>
        <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
        <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-container>
</template>

<script>
import PatientHeader from "../../components/Main/Patients/PatientHeader.vue";

// 导入子组件，缩写格式 AppHeader: AppHeader
export default {
  components: {
    PatientHeader,
    //PatientTools,
    //PatientLists,
  }, // 有s
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    },
  },
};
</script>
