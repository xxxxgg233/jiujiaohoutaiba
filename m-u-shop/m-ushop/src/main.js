// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/public.css'
import './assets/js/remScale'
// import './assets/js/jquery-1.10.1.min.js'
Vue.config.productionTip = false


//引入方法
import gMethods from './methods'
//对对象进行循环
for(let i in gMethods){
  Vue.prototype[i]=gMethods[i]
}
Vue.prototype.$imgUrl = 'http://localhost:3000'

//引入组件
import gCommon from './common'
console.log(gCommon,'模块 对象')
//对对象进行循环
for(let i in gCommon){
  Vue.component(i,gCommon[i])
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
