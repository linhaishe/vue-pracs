<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection"> </el-table-column>
    <el-table-column label="" width="60px"
      ><el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar
    ></el-table-column>
    <el-table-column label="Basic Info">
      <template slot-scope="scope"
        >{{ scope.row.userName }}<br /><span>xusumu@gmail.com</span></template
      >
    </el-table-column>
    <el-table-column prop="userId" label="Phone Number"> </el-table-column>
    <el-table-column prop="id" label="City" show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="uploadTime"
      label="Next Appoinment"
      show-overflow-tooltip
    >
    </el-table-column>
    <el-table-column prop="title" label="Last Appoinment" show-overflow-tooltip>
    </el-table-column>
    <el-table-column prop="content" label="Register Date" show-overflow-tooltip>
    </el-table-column>
    <el-table-column show-overflow-tooltip>
      <template slot-scope="scope">
        <i
          class="el-icon-document-delete listDelete"
          @click="listDelete(scope.$index, tableData)"
        ></i>
        <i class="el-icon-edit listUpdate" @click="listUpdate"></i>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        // {
        //   basicInfo: "Daine Cooper",
        //   phoneNumber: 43535345,
        //   email: "xusumu@gmil.com",
        //   city: "Cilacap",
        //   nextAppoinment: "Jan 21,2018 - 13:30",
        //   lastAppoinment: "Jan 21,2018 - 13.30",
        //   registerDate: "Jan 21, 2018",
        // },
      ],
      multipleSelection: [],
    };
  },

  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    getList() {
      this.$axios({ url: "/news/getnewscontrol" }).then((res) => {
        console.log(res.data);
        this.tableData = res.data.data;
      });
    },
    listDelete(index, data) {
      console.log(index, data);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios({
            url: "/news/delNews",
            method: "post",
            data: { id: data[index].id },
          }).then((res) => {
            if (res.data.error) {
              this.$message.error("删除失败");
            } else {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.getList();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    listUpdate() {
      this.$confirm("更新未完成", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style scoped>
.listDelete {
  margin-right: 20px;
}
.listDelete,
.listUpdate {
  cursor: pointer;
}
</style>
