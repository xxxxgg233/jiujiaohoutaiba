//这是一个接口集合模块
import http from './axios'


/* ============== 菜单接口  ================== */
//封装一个菜单列表接口
export function getMenuList(params){
    return http.get('/api/menulist',{
        params
    })   
}
//封装一个菜单添加接口
export function getMenuAdd(data){
    return http.post('/api/menuadd',data)   
}
//封装一个菜单获取（一条）接口
export function getMenuInfo(params){
    return http.get('/api/menuinfo',{
        params
    })   
}
//封装一个菜单修改接口
export function getMenuEdit(data){
    return http.post('/api/menuedit',data)   
}
//封装一个菜单删除接口
export function getMenuDelete(data){
    return http.post('/api/menudelete',data)   
}

/* ============== 角色接口  ================== */
//封装一个角色列表接口
export function getroleList(){
    return http.get('/api/rolelist')   
}
//封装一个角色添加接口
export function getroleAdd(data){
    return http.post('/api/roleadd',data)   
}
//封装一个角色获取（一条）接口
export function getroleInfo(params){
    return http.get('/api/roleinfo',{
        params
    })   
}
//封装一个角色修改接口
export function getroleEdit(data){
    return http.post('/api/roleedit',data)   
}
//封装一个角色删除接口
export function getroleDelete(data){
    return http.post('/api/roledelete',data)   
}


/* ============== 管理员接口  ================== */
//封装一个管理员列表接口
export function getuserList(params){
    return http.get('/api/userlist',{params})   
}
//封装一个管理员添加接口
export function getuserAdd(data){
    return http.post('/api/useradd',data)   
}
//封装一个管理员总数接口
export function getuserCount(){
    return http.get('/api/usercount')   
}
//封装一个管理员获取（一条）接口
export function getuserInfo(params){
    return http.get('/api/userinfo',{
        params
    })   
}
//封装一个管理员修改接口
export function getuserEdit(data){
    return http.post('/api/useredit',data)   
}
//封装一个管理员删除接口
export function getuserDelete(data){
    return http.post('/api/userdelete',data)   
}