<template>
  <el-container style="display: block">
    <patient-header></patient-header>
    <h1>message</h1>
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
};
</script>
