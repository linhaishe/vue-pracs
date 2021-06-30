<template>
  <div id="loginPage">
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />

    <!-- Bootstrap css icon files -->

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    />
    <div id="login-panel">
      <hr style="margin-top: 80px" />
      <div class="inpBtn">
        <i class="bi bi-person"></i>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control username"
            id="floatingInput"
            placeholder="Username"
            v-model="data.username"
          />
          <label for="floatingInput">Username</label>
        </div>
      </div>
      <div class="inpBtn">
        <i class="bi bi-key"></i>
        <div class="form-floating">
          <input
            type="password"
            class="form-control psw"
            id="floatingPassword"
            placeholder="Password"
            v-model="data.password"
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>
      <button type="button" class="btn btn-primary login-btn" @click="login">
        登入
      </button>
    </div>
  </div>
</template>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
  crossorigin="anonymous"
></script>
<script>
export default {
  data() {
    return {
      data: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$axios({
        url: "/login/getuser",
        params: this.data,
      }).then((res) => {
        console.log(res);
        if (res.data.error) {
          this.$message.error("登录失败！");
          this.data = {
            username: "",
            password: "",
          };
        } else {
          this.$message.success("登录成功");
          //console.log("返回的数据", res.data[0].adminName);
          // console.log("返回的数据", res.data[0].adminId);
          // this.$router.push({path:'/home/student',name:'Student',params:{user:this.data.username}});

          let userInfo = {
            userName: res.data.data[0].adminName,
            userId: res.data.data[0].adminId,
          };

          // let userName = res.data.data[0].adminName;
          // let userId = res.data.data[0].userId;

          //console.log("userInfo", userInfo);
          this.$router.push("/home");
          this.$store.commit("setUser", userInfo);
        }
      });
    },
  },
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.2/lib/theme-chalk/index.css");
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
html,
body {
  height: 100%;
  width: 100%;
}
#loginPage {
  height: 100%;
  background: url(../../src/assets/loginPage.jpeg) no-repeat center center;
  background-attachment: fixed;
  background-color: white;
  background-size: cover;
  /* background: white url(../images/loginPage.jpeg) no-repeat fixed center center; */
}
#login-panel {
  height: 340px;
  width: 320px;
  background-color: rgba(192, 192, 192, 0.6);
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -160px;
  margin-top: -170px;
  text-align: center;
}

#login-panel h1 {
  margin-top: 20px;
  font-size: 20px;
  color: black;
}
.inpBtn {
  display: flex;
  margin-left: 30px;
}

.form-floating {
  margin-left: 10px;
}

.form-floating input {
  height: 28px;
  width: 231px;
}

.form-floating > .form-control {
  height: calc(1.5rem + 2px);
}

.form-floating > label {
  padding: 5px;
}

.inpBtn i {
  /* display: inline-block; */
  margin-top: 5px;
}

.radio-btn {
  display: flex;
  margin-top: 10px;
  justify-content: center;
}

.form-check {
  margin-left: 10px;
}

.login-btn {
  margin-top: 10px;
  width: 280px;
}

.warning {
  font-size: 12px;
  /* opacity: 0; */
}
</style>
