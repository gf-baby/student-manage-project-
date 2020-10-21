<template>
  <div class="home">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200">
        <h1 class="log"></h1>
        <el-menu
          default-active=""
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">管理首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">学员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">学院项目管理</el-menu-item>
              <el-menu-item index="1-2">学员资料</el-menu-item>
              <el-menu-item index="1-3">学员宿舍</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">考勤管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">数据统计</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">我的中心</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶部栏 -->
        <el-header>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-radio-group
                  v-model="isCollapse"
                  style="margin-bottom: 20px;"
                >
                  <el-radio-button :label="false">展开</el-radio-button>
                  <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
              </div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content bg-purple-light">
                <span class="sy-title">千锋管理系统</span>
              </div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content bg-purple">
                <el-avatar :size="50" :src="circleUrl"></el-avatar>
                <span class="hy">欢迎:</span>
                <span class="userN">{{userInfo.nickname}}</span>
                <span class="quit" @click="quit">退出</span>
              </div></el-col
            >
          </el-row>
        </el-header>
        <!-- 主题区 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { getLoginLog } from "@/api/index";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isCollapse: true,
      circleUrl:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603208069920&di=89265ad6f33ad8ce41a04aa0fc218efa&imgtype=0&src=http%3A%2F%2Ftupian.qqw21.com%2Farticle%2FUploadPic%2F2020-9%2F2020922033115276.jpg"
    };
  },
  computed:{
    ...mapState(["userInfo"])
  },
  mounted() {
    getLoginLog().then(res => {
      // console.log(res);
    });
  },
  methods:{
    quit(){
      localStorage.removeItem("gf-token")
      localStorage.removeItem("gf-userInfo")
      this.$router.push("/login")
    }
  }
};
</script>

<style scoped>
.el-col .sy-title{
  font: 20px/50px "";
}
.grid-content span {
  margin-left: 5px;
  font-size: 16px;
  color: #fff;
}
.el-avatar {
  vertical-align: middle;
  margin-right: 5px;
}
.grid-content .userN {
  color: #00ffff;
}
.grid-content .quit {
  color: pink;
  cursor: pointer;
}
.log {
  height: 60px;
  background: linear-gradient(135deg, #4c67ff, #5635df);
  background-image: url("../../assets/img/logo.png");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
