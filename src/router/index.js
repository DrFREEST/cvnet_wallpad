import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Member from '../views/Member.vue'
// 로그인
import Login from '../views/Login.vue'//로그인 - 메인
// 회원
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
// 환경설정
import SettingList from '../views/configure/SettingList.vue'//환경설정 - 설정 목록
import AccountInfo from '../views/configure/AccountInfo.vue'//환경설정 - 계정 정보
import AppInfo from '../views/configure/AppInfo.vue'//환경설정 - 앱 정보
import SetPush from '../views/configure/SetPush.vue'//환경설정 - 푸쉬 알림 설정
import SelLanguage from '../views/configure/SelLanguage.vue'//환경설정 - 언어 선택
import HomeComming from '../views/configure/HomeComming.vue'//환경설정 - 귀가 모드 설정
import CallMode from '../views/configure/CallMode.vue'//환경설정 - 통화벨 설정
// 제어
import Ventilation from '../views/houseControl/Ventilation.vue'// 제어 - 환기
import Heating from '../views/houseControl/Heating.vue'// 제어 - 난방
import AirConditioner from '../views/houseControl/AirConditioner.vue'// 제어 - 에어컨
import Light from '../views/houseControl/Light.vue'// 제어 - 조명
import StandbyPower from '../views/houseControl/StandbyPower.vue'// 제어 - 대기전력
import GasValve from '../views/houseControl/GasValve.vue'// 제어 - 가스밸브
import Security from '../views/houseControl/Security.vue'// 제어 - 방범설정
import Elevator from '../views/houseControl/Elevator.vue'// 제어 - 엘리베이터호출
import Curtain from '../views/houseControl/Curtain.vue'// 제어 - 커튼
import AllSwitchs from '../views/houseControl/AllSwitchs.vue'// 제어 - 일괄소등

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
    },
    // 제어 - 환기
    {
      path: '/houseControl/ventilation',
      name: 'ventilation',
      component: Ventilation,
    },
    // 제어 - 난방
    {
      path: '/houseControl/heating',
      name: 'heating',
      component: Heating,
    },
    // 제어 - 에어컨
    {
      path: '/houseControl/airConditioner',
      name: 'airConditioner',
      component: AirConditioner,
    },
    // 제어 - 조명
    {
      path: '/houseControl/light',
      name: 'light',
      component: Light,
    },
    // 제어 - 대기전력
    {
      path: '/houseControl/standbyPower',
      name: 'standbyPower',
      component: StandbyPower,
    },
    // 제어 - 가스밸브
    {
      path: '/houseControl/gasValve',
      name: 'gasValve',
      component: GasValve,
    },
    // 제어 - 방범설정
    {
      path: '/houseControl/security',
      name: 'security',
      component: Security,
    },
    // 제어 - 엘리베이터호출
    {
      path: '/houseControl/elevator',
      name: 'elevator',
      component: Elevator,
    },
    // 제어 - 커튼
    {
      path: '/houseControl/curtain',
      name: 'curtain',
      component: Curtain,
    },
    // 제어 - 일괄소등
    {
      path: '/houseControl/allSwitchs',
      name: 'allSwitchs',
      component: AllSwitchs,
    }
  ]
})

export default router
