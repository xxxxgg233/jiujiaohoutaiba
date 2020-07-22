import Vue from 'vue'
import Router from 'vue-router'

import index from "@/components/index";
import mine from "@/components/mine";
import list from "@/components/list";
import class1 from "@/components/class";
import conser from "@/components/conser";
import cart from "@/components/cart";
import details from "@/components/details";

//使用路由
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      component: () => import("@/components/footer"),
      children: [
        {
          path: '/cart',
          component: () => import("@/components/cart")
        }, {
          path: '/mine',
          component: () => import("@/components/mine")
        }, {
          path: '/home',
          component: () => import("@/components/index")
        }
        , {
          path: '',
          redirect: '/home'
        }
      ]
    },

    {
      path: '/list',
      component: () => import("@/components/list")
    },
    {
      path: '/class',
      component: () => import("@/components/class")
    },
    {
      path: '/conser',
      component: () => import("@/components/conser")
    },

    {
      path: '/details',
      component: () => import("@/components/details")
    },

  ]
})
