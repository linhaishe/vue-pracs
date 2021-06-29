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
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-more"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">黄金糕</el-dropdown-item>
          <el-dropdown-item command="b">狮子头</el-dropdown-item>
          <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
          <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          basicInfo: "Daine Cooper",
          phoneNumber: 43535345,
          email: "xusumu@gmil.com",
          city: "Cilacap",
          nextAppoinment: "Jan 21,2018 - 13:30",
          lastAppoinment: "Jan 21,2018 - 13.30",
          registerDate: "Jan 21, 2018",
        },
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
  },
  mounted() {
    this.getList();
  },
};
</script>

<style scoped></style>
