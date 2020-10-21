import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let userInfo=localStorage.getItem("gf-userInfo")||'{}'
userInfo=JSON.parse(userInfo)
export default new Vuex.Store({
  state: {
    userInfo
  },
  mutations: {
    SET_USERINFO(state,paylond){
      state.userInfo=paylond
    }
  },
  actions: {}
});
