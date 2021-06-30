<template>
  <div>
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
            <el-dropdown-item>Basic Info</el-dropdown-item>
            <el-dropdown-item>Phone Number</el-dropdown-item>
            <el-dropdown-item>City</el-dropdown-item>
            <el-dropdown-item>Next Appoinment</el-dropdown-item>
            <el-dropdown-item>Register Date</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="tools-right">
        <el-button size="small" :plain="true" @click="addNews">
          <i class="el-icon-folder-add"></i></el-button
        ><el-button size="small" :plain="true" @click="open2"
          ><i class="el-icon-sort"></i>Fillter</el-button
        ><el-button size="small" :plain="true" @click="open3"
          ><i class="el-icon-set-up"></i>Edit Column</el-button
        >
      </div>
    </el-header>

    <!-- 添加框 -->
    <el-dialog title="内容添加" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="title" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="content" :label-width="formLabelWidth">
          <el-input v-model="form.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addComfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        // name: "",
        // region: "",
        // date1: "",
        // date2: "",
        // delivery: false,
        // type: [],
        // resource: "",
        // desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    getList() {
      this.$axios({ url: "/news/getnewscontrol" }).then((res) => {
        console.log(res.data);
        this.tableData = res.data.data;
      });
    },
    handleClick() {
      alert("button click");
    },
    addNews() {
      this.dialogFormVisible = true;
    },
    addComfirm() {
      this.$axios({
        url: "/news/addnews",
        method: "post",
        data: {
          content: this.form.content,
          title: this.form.title,
          adminId: this.$store.state.userInfo.userId,
          adminName: this.$store.state.userInfo.userName,
        },
      }).then((res) => {
        if (res.data.error) {
          this.$message.error("添加失败");
        } else {
          this.$message.success("修改成功");
          this.dialogFormVisible = false;
          this.getList();
        }
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
  mounted() {
    console.log("storeInfo", this.$store.state.userInfo.userName);
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
