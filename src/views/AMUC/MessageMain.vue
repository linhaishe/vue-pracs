<template>
  <el-container style="display: block">
    <patient-header></patient-header>
    <patient-tools></patient-tools>
    <patient-lists></patient-lists>
  </el-container>
</template>

<script>
import PatientHeader from "../../components/Main/AMUC/PatientHeader.vue";
import PatientTools from "../../components/Main/AMUC/PatientTools.vue";
import PatientLists from "../../components/Main/AMUC/PatientLists.vue";

// 导入子组件，缩写格式 AppHeader: AppHeader
export default {
  components: {
    PatientHeader,
    PatientTools,
    PatientLists,
  }, // 有s
};
</script>

<style scoped></style>
