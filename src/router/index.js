import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import ticket from '@/components/ticket'
import hotel from '@/components/hotel'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        keepAlive: false,
        title: '首页'
      },
      component: Home
    },
    {
      path: '/ticket',
      name: 'ticket',
      meta: {
        keepAlive: false,
        title: '门票预订'
      },
      component: ticket
    },
    {
      path: '/hotel',
      name: 'hotel',
      meta: {
        keepAlive: false,
        title: '酒店预订'
      },
      component: hotel
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
    next() // 跳转
  }
  //滚到顶部
  window.scroll(0, 0);
  next() // 跳转
})

export default router
