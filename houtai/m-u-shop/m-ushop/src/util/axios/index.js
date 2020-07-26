//这是一个接口集合模块
import http from './axios'


//登录
export function getlogin(params) {
    return http.get('/api/login', {
        params
    })
}
//注册
export function getregister(data) {
    return http.post('/api/register', data)
}
