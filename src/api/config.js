import axios from "axios"
import ElementUI from 'element-ui';
import router from "./../router"

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "/api" : "http://www.chst.vip"

axios.defaults.withCredentials = true//携带认证

axios.create({
    timeout: 4000,

})
// 请求拦截
axios.interceptors.request.use(config => {
    //登入&注册是不需要携带token
    // console.log(config);
    if (config.url == "/users/login") {
        return config
    } else {
        let token = localStorage.getItem('gf-token')
        //config值的是每个请求对象
        config.headers['authorization'] = token;
        //放行
        return config
    }

})

// 响应请求
axios.interceptors.response.use(config=>{
    let {data} =config
    // console.log(ElementUI);
    if(data.code=="1004" || data.code=="10022"){
        ElementUI.Message.error("登录信息失效,请重新登录!")
        router.push("/login")
    }
    return config
})
export default axios