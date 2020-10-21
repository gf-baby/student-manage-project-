<template>
  <div class="login-page">
    <video
      muted
      src="../../assets/video/bg_video.mp4"
      autoplay
      loop
      preload="auto"
    ></video>
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-loginForm"
    >
      <div class="ico-font"><h1>千锋管理系统</h1></div>

      <el-form-item label="用户名" prop="userName">
        <el-input
          type="text"
          v-model="loginForm.userName"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="sy-btn"
          plain
          @click="submitForm('loginForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "@/api/index";
import { mapMutations } from "vuex";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      //用户名正则，4到16位（字母，数字，下划线，减号）
      let uPattern = /^[a-zA-Z0-9_-]{3,16}$/;
      if (!uPattern.test(value)) {
        callback("3到16位(字母,数字,下划线,减号)");
      } else {
        callback();
      }
    };
    var validatePassWord = (rule, value, callback) => {
      // let pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
      let uPattern = /^[a-zA-Z0-9_-]{3,16}$/;
      if (!uPattern.test(value)) {
        callback("密码格式错误");
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePassWord, trigger: "blur" }]
      }
    };
  },
  methods: {
     ...mapMutations(["SET_USERINFO"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: "拼命加载中...",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });

          let { userName, password } = this.loginForm;
          login(userName, password).then(res => {
            if (res.data.state) {
              loading.close();
              this.$message.success("登陆成功");
              localStorage.setItem("gf-token", res.data.token);
              localStorage.setItem(
                "gf-userInfo",
                JSON.stringify(res.data.userInfo)
              );
              // console.log(res.data.userInfo);
              this.SET_USERINFO(res.data.userInfo)
              this.$router.push("/");
            } else {
              this.$message.error("用户名或密码错误！");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.login-page .el-form .ico-font {
  font: 1em/2em "";
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
  color: rgba(64, 224, 208, 0.5);
}
.login-page .el-form .sy-btn {
  width: 60%;
  text-align: center;
  margin-left: 2em;
  border: none;
  background-image: linear-gradient(-90deg, #3333ff, #0099ff);
}
.login-page video {
  display: block;
  margin: auto;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  /* opacity: 0.5; */
  z-index: -1;
}
</style>