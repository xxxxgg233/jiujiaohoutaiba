import axios from 'axios'
let http = axios.create({
    baseURL:'http://127.0.0.1:3000'
 })
 

http.interceptors.request.use((config)=>{
    return config
})


http.interceptors.response.use(res=>{
    return res.data 
})

export default http