import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Member from '../views/Member.vue'

Vue.use(Router);

const router = new Router({
  base : '/smarthome/v2',
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
    },
  ]
})

export default router
