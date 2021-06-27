<template>
  <el-header>
    <div class="tools-left">
      <div class="patientsNum">
        <h2>76</h2>
        <span><strong>patients</strong></span>
      </div>
      <div class="separate"></div>

      <span class="sortby"><strong>Sort by:</strong></span>
      <el-dropdown size="small" split-button @click="handleClick">
        Last appointment
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="tools-right">
      <el-button size="small" :plain="true" @click="open1">
        <i class="el-icon-printer"></i></el-button
      ><el-button size="small" :plain="true" @click="open2"
        ><i class="el-icon-sort"></i>Fillter</el-button
      ><el-button size="small" :plain="true" @click="open3"
        ><i class="el-icon-set-up"></i>Edit Column</el-button
      >
    </div>
  </el-header>
</template>
<script>
export default {
  methods: {
    handleClick() {
      alert("button click");
    },
    open1() {
      this.$message({
        showClose: true,
        message: "这是一条消息提示",
      });
    },
    open2() {
      this.$message({
        showClose: true,
        message: "这是一条消息提示",
      });
    },
    open3() {
      this.$message({
        showClose: true,
        message: "这是一条消息提示",
      });
    },
  },
};
</script>

<style scoped>
.el-header {
  display: flex;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
  justify-content: flex-end;
  /* background-color: #ecf3f9; */
}

.tools-left,
.patientsNum {
  display: flex;
  align-items: center;
}

.tools-left {
  margin-right: auto;
}

.sort {
  color: black;
}

.patientsNum span,
.sortby {
  font-size: 12px;
  color: lightgray;
  margin-right: 20px;
}

.patientsNum h2 {
  color: #70a7e8;
  margin-right: 20px;
}

.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.tools-right img {
  width: 15px;
  height: 15px;
}

.el-icon-set-up,
.el-icon-sort {
  margin-right: 10px;
}

.separate {
  height: 30px;
  margin-right: 20px;
  border-right: 1px solid #e6e6e6;
}
</style>
