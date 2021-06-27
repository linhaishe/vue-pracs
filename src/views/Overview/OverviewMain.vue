<template>
  <el-container style="display: block">
    <overview-header></overview-header>
    <overview-list></overview-list>
  </el-container>
</template>

<script>
import OverviewHeader from "../../components/Main/Overview/OverviewHeader.vue";
import OverviewList from "../../components/Main/Overview/OverviewList.vue";

export default {
  components: {
    OverviewHeader,
    OverviewList,
  },
};
</script>

<style scoped></style>
