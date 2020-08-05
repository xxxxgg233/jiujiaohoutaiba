//这是一个接口集合模块
import http from './axios'


//登录
export function getlogin(data) {
    return http.post('/login', data)
}
//注册
export function getregister(data) {
    return http.post('/register', data)
}
//分类信息
export function getcate() {
    return http.get('/getcate')
}
//轮播图
export function getbanner() {
    return http.get('/getbanner')
}
//商品信息（首页）
export function getindexgoods() {
    return http.get('/getindexgoods')
}
//分类树形结构）
export function getcatetree() {
    return http.get('/getcatetree')
}
//分类商品
export function getgoods(
    params
) {
    return http.get('/getgoods', { params })
}
//一件商品
export function getgoodsinfo(
    params
    ) {
    return http.get('/getgoodsinfo', { params })
}
//购物车列表
export function cartlist(params) {
    return http.get('/cartlist', { 
        params
    })
}
export function cartadd(data) {
    return http.post('/cartadd', data)
}
export function cartdelete(data) {
    return http.post('/cartdelete', data)
}