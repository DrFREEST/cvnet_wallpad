import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Member from '../views/Member.vue'
import Login from '../views/Login.vue'//로그인 - 메인
import CommonLayout from '../views/login/CommonLayout.vue'//로그인 기본 레이아웃 페이지

Vue.use(Router);

const router = new Router({
  base: '/smarthome/v2',
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    {
      path: '/member',
      name: 'member',
      component: Member,
    }, {//로그인 - 메인
      path: '/login',
      name: 'login',
      component: Login,
    }
  ]
})

export default router
