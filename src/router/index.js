import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Member from '../views/Member.vue'
import Login from '../views/Login.vue'//로그인 - 메인
import JoinStep1 from '../views/login/JoinStep1.vue'//로그인 - 세대정보입력
import JoinStep2 from '../views/login/JoinStep2.vue'//로그인 - 회원정보입력
import UseTerms from '../views/login/UseTerms.vue'//로그인 - 서비스 이용 약관
import CertificationSuccess from '../views/login/CertificationSuccess.vue'//로그인 - 인증성공
import CertificationFail from '../views/login/CertificationFail.vue'//로그인 - 인증실패

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
    }, {//로그인 - 세대정보입력
      path: '/login/joinStep1',
      name: 'joinStep1',
      component: JoinStep1,
    }, {//로그인 - 로그인정보입력
      path: '/login/joinStep2',
      name: 'joinStep2',
      component: JoinStep2,
    }, {//로그인 - 서비스이용약관
      path: '/login/useTerms',
      name: 'useTerms',
      component: UseTerms,
    }, {//로그인 - 서비스이용약관
      path: '/login/certificationSuccess',
      name: 'certificationSuccess',
      component: CertificationSuccess,
    }, {//로그인 - 서비스이용약관
      path: '/login/certificationFail',
      name: 'certificationFail',
      component: CertificationFail,
    }
  ]
})

export default router
