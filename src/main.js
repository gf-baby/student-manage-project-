import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 全局注册element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "./assets/style/base.css"
import "./assets/style/el-ui.css"
// 引用element-ui
Vue.use(ElementUI);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // console.log(to.path);
  let token = localStorage.getItem("gf-token")
  if(token){
    next()
  }else{
    if(to.path==="/login"){
      next()
    }else{
      next("/login")
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
