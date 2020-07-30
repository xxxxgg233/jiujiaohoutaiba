//这是一个接口集合模块
import http from './axios'


//登录
export function getlogin(data) {
    return http.post('/api/login', data)
}
//注册
export function getregister(data) {
    return http.post('/api/register', data)
}
//分类信息
export function getcate() {
    return http.get('/api/getcate')
}
//轮播图
export function getbanner() {
    return http.get('/api/getbanner')
}
//商品信息（首页）
export function getindexgoods() {
    return http.get('/api/getindexgoods')
}
//分类树形结构）
export function getcatetree() {
    return http.get('/api/getcatetree')
}
//分类商品
export function getgoods(
    parmas
) {
    return http.get('/api/getgoods', { parmas })
}
//一件商品
export function getgoodsinfo(parmas) {
    return http.get('/api/getgoodsinfo', { parmas })
}
//购物车列表
export function cartlist(parmas) {
    return http.get('/api/cartlist', { parmas })
}
export function cartadd(data) {
    return http.post('/api/cartadd', data)
}
export function cartdelete(data) {
    return http.post('/api/cartdelete', data)
}