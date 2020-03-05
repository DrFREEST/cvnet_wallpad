import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Member from '../views/Member.vue'
import Login from '../views/Login.vue'//로그인 - 메인
import JoinStep1 from '../views/member/JoinStep1.vue'//회원 - 세대정보입력
import JoinStep2 from '../views/member/JoinStep2.vue'//회원 - 회원정보입력
import UseTerms from '../views/member/UseTerms.vue'//회원 - 서비스 이용 약관
import CertificationSuccess from '../views/member/CertificationSuccess.vue'//회원 - 인증성공
import CertificationFail from '../views/member/CertificationFail.vue'//회원 - 인증실패
import FindIdPass from '../views/member/FindIdPass.vue'//회원 - 아이디 또는 비밀번호 찾기
import FindId from '../views/member/FindId.vue'//회원 - 아이디 찾기
import FindIdResult from '../views/member/FindIdResult.vue'//회원 - 아이디 찾기 결과
import FindPass from '../views/member/FindPass.vue'//회원 - 비밀번호 찾기
import ChangePass from '../views/member/ChangePass.vue'//회원 - 비밀번호 변경

Vue.use(Router);

const router = new Router({
  base: '/smarthome/v2',
  mode: 'history',
  routes: [
    {//홈
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
    }, {//회원 - 세대정보입력
      path: '/member/joinStep1',
      name: 'joinStep1',
      component: JoinStep1,
    }, {//회원 - 로그인정보입력
      path: '/member/joinStep2',
      name: 'joinStep2',
      component: JoinStep2,
    }, {//회원 - 서비스이용약관
      path: '/member/useTerms',
      name: 'useTerms',
      component: UseTerms,
    }, {//회원 - 인증성공
      path: '/member/certificationSuccess',
      name: 'certificationSuccess',
      component: CertificationSuccess,
    }, {//회원 - 인증실패
      path: '/member/certificationFail',
      name: 'certificationFail',
      component: CertificationFail,
    }, {//회원 - 아이디 또는 비밀번호 찾기
      path: '/member/findIdPass',
      name: 'findIdPass',
      component: FindIdPass,
    }, {//회원 - 아이디 찾기
      path: '/member/findId',
      name: 'findId',
      component: FindId,
    }, {//회원 - 아이디 찾기 결과
      path: '/member/findIdResult',
      name: 'findIdResult',
      component: FindIdResult,
    }, {//회원 - 비밀번호 찾기
      path: '/member/findPass',
      name: 'findPass',
      component: FindPass,
    }, {//회원 - 비밀번호 변경
      path: '/member/changePass',
      name: 'changePass',
      component: ChangePass,
    }
  ]
})

export default router
