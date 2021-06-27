<template>
  <el-header>
    <div class="nav-left">
      <img src="../../../assets/Overview.png" alt="" />

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
  </el-header>
</template>

<script>
// import PatientTools from "../Main/patientList/PatientTools.vue";
// import PatientLists from "../Main/patientList/PatientLists.vue";

export default {
  data() {
    return {
      input2: "",
    };
  },
};
</script>

<style scoped>
.el-header {
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background-color: #ecf3f9; */
}
img {
  height: 30px;
  width: 30px;
  margin-right: 30px;
}

span {
  margin-right: 30px;
}

.list {
  font-size: 12px;
  color: #70a7e8;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
}

.nav-left {
  margin-right: auto;
}

.el-input {
  margin-right: 20px;
}

.searchInput >>> .el-input__inner {
  border-radius: 20px;
}
</style>
