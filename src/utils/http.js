//axios基础封装
import axios from "axios";
const httpInstance=axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})

httpInstance.interceptors.request.use(config=>{
    return config
},err=>{Promise.reject(err)})
httpInstance.interceptors.response.use(res=>{
    return res.data
},err=>{Promise.reject(err)})
export default httpInstance