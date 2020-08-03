//这是一个接口集合模块
import http from './axios'

export function personalized(params){
    return http.get('/personalized',{
        params
    })
}

export function banner(){
    return http.get('/banner')
}

export function getNewSongs(){
    return http.get('/personalized/newsong')
}

export function getHotList(){
    return http.get('/playlist/detail?id=3778678')
}

export function searchHot(){
    return http.get('/search/hot')
}

export function searchInfo(params){
    return http.get('/search',{
        params
    })
}