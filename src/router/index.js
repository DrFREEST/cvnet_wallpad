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
import SettingList from '../views/configure/SettingList.vue'//환경설정 - 설정 목록
import AccountInfo from '../views/configure/AccountInfo.vue'//환경설정 - 계정 정보
import AppInfo from '../views/configure/AppInfo.vue'//환경설정 - 앱 정보
import SetPush from '../views/configure/SetPush.vue'//환경설정 - 푸쉬 알림 설정
import SelLanguage from '../views/configure/SelLanguage.vue'//환경설정 - 언어 선택
import HomeComming from '../views/configure/HomeComming.vue'//환경설정 - 귀가 모드 설정
import CallMode from '../views/configure/CallMode.vue'//환경설정 - 통화벨 설정

Vue.use(Router);

const router = new Router({
  base: '/smarthome/v2',
  mode: 'history',
  routes: [
    //홈
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    //테스트
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    //회원
    {
      path: '/member',
      name: 'member',
      component: Member,
    },
    //로그인 - 메인
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    //회원 - 세대정보입력
    {
      path: '/member/joinStep1',
      name: 'joinStep1',
      component: JoinStep1,
    },
    //회원 - 로그인정보입력
    {
      path: '/member/joinStep2',
      name: 'joinStep2',
      component: JoinStep2,
    },
    //회원 - 서비스이용약관
    {
      path: '/member/useTerms',
      name: 'useTerms',
      component: UseTerms,
    },
    //회원 - 인증성공
    {
      path: '/member/certificationSuccess',
      name: 'certificationSuccess',
      component: CertificationSuccess,
    },
    //회원 - 인증실패
    {
      path: '/member/certificationFail',
      name: 'certificationFail',
      component: CertificationFail,
    },
    //회원 - 아이디 또는 비밀번호 찾기
    {
      path: '/member/findIdPass',
      name: 'findIdPass',
      component: FindIdPass,
    },
    //회원 - 아이디 찾기
    {
      path: '/member/findId',
      name: 'findId',
      component: FindId,
    },
    //회원 - 아이디 찾기 결과
    {
      path: '/member/findIdResult',
      name: 'findIdResult',
      component: FindIdResult,
    },
    //회원 - 비밀번호 찾기
    {
      path: '/member/findPass',
      name: 'findPass',
      component: FindPass,
    },
    //회원 - 비밀번호 변경
    {
      path: '/member/changePass',
      name: 'changePass',
      component: ChangePass,
    },
    //환경설정 - 설정 목록
    {
      path: '/configure/settingList',
      name: 'settingList',
      component: SettingList,
    },
    //환경설정 - 계정 정보
    {
      path: '/configure/accountInfo',
      name: 'accountInfo',
      component: AccountInfo,
    },
    //환경설정 - 앱 정보
    {
      path: '/configure/appInfo',
      name: 'appInfo',
      component: AppInfo,
    },
    //환경설정 - 푸쉬 알림 설정
    {
      path: '/configure/setPush',
      name: 'setPush',
      component: SetPush,
    },
    //환경설정 - 언어 선택
    {
      path: '/configure/selLanguage',
      name: 'selLanguage',
      component: SelLanguage,
    },
    //환경설정 - 귀가 모드 설정
    {
      path: '/configure/homeComming',
      name: 'homeComming',
      component: HomeComming,
    },
    //환경설정 - 통화벨 설정
    {
      path: '/configure/callMode',
      name: 'callMode',
      component: CallMode,
    }
  ]
})

export default router
