import Vue from 'vue'
import Router from 'vue-router'
import VueCookies from 'vue-cookies'

import Home from '../views/Home.vue'

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
//조회
import Notice from '../views/service/Notice.vue'// 조회 - 공지사항
import AdnimistratorExpenses from '../views/service/AdnimistratorExpenses.vue'// 조회 - 관리비
import VisitorVideo from '../views/service/VisitorVideo.vue'// 조회 - 방문자영상
import HomeVita from '../views/service/HomeVita.vue'// 조회 - 홈비타현장
import HomeVitaM from '../views/service/HomeVitaM.vue'// 조회 - 홈비타현장 - 월간
import HomeVitaY from '../views/service/HomeVitaY.vue'// 조회 - 홈비타현장 - 연간
import RemoteMeterReading from '../views/service/RemoteMeterReading.vue'// 조회 - 원격검침
import EmsDaily from '../views/service/EmsDaily.vue'// 조회 - EMS - 일별
import EmsMonyhly from '../views/service/EmsMonyhly.vue'// 조회 - EMS - 월별
import EmsM from '../views/service/EmsM.vue'// 조회 - EMS - 월간사용량
import EmsY from '../views/service/EmsY.vue'// 조회 - EMS - 연간사용량
import AccessRecord from '../views/service/AccessRecord.vue'// 조회 - 출입기록
import CourierInquiry from '../views/service/CourierInquiry.vue'// 조회 - 택배조회
import ParkingLocation from '../views/service/ParkingLocation.vue'// 조회 - 주차위치
import AdmissionNotice from '../views/service/AdmissionNotice.vue'// 조회 - 입차통보
import EmergencyList from '../views/service/EmergencyList.vue'// 조회 - 비상리스트
import Cctv from '../views/service/Cctv.vue'// 조회 - CCTV
import InterPhoneCall from '../views/service/InterPhoneCall.vue'// 조회 - 인터폰통화
import Calling from '../views/service/Calling.vue'// 조회 - 통화중

Vue.use(Router);
Vue.use(VueCookies);
Vue.component('use-terms', UseTerms)

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
    //로그인 - 메인
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { authRequired: true },
      props: true
    },
    //회원 - 세대정보입력
    {
      path: '/member/joinStep1',
      name: 'joinStep1',
      component: JoinStep1,
      meta: { authRequired: true },
      props: true
    },
    //회원 - 로그인정보입력
    {
      path: '/member/joinStep2',
      name: 'joinStep2',
      component: JoinStep2,
      meta: { authRequired: true },
      props: true
    },
    //회원 - 서비스이용약관
    {
      path: '/member/useTerms',
      name: 'useTerms',
      component: UseTerms,
      meta: { authRequired: true },
      props: true
    },
    //회원 - 인증성공
    {
      path: '/member/certificationSuccess',
      name: 'certificationSuccess',
      component: CertificationSuccess,
      meta: { authRequired: true },
      props: true
    },
    //회원 - 인증실패
    {
      path: '/member/certificationFail',
      name: 'certificationFail',
      component: CertificationFail,
      meta: { authRequired: true },
      props: true
    },
    //회원 - 아이디 또는 비밀번호 찾기
    {
      path: '/member/findIdPass',
      name: 'findIdPass',
      component: FindIdPass,
      meta: { authRequired: true },
      props: true
    },
    //회원 - 아이디 찾기
    {
      path: '/member/findId',
      name: 'findId',
      component: FindId,
      meta: { authRequired: true },
      props: true
    },
    //회원 - 아이디 찾기 결과
    {
      path: '/member/findIdResult',
      name: 'findIdResult',
      component: FindIdResult,
      meta: { authRequired: true },
      props: true
    },
    //회원 - 비밀번호 찾기 
    {
      path: '/member/findPass',
      name: 'findPass',
      component: FindPass,
      meta: { authRequired: true },
      props: true
    },
    //회원 - 비밀번호 변경
    {
      path: '/member/changePass',
      name: 'changePass',
      component: ChangePass,
      props: true
    },
    //환경설정 - 설정 목록
    {
      path: '/configure/settingList',
      name: 'settingList',
      component: SettingList,
      props: true
    },
    //환경설정 - 계정 정보
    {
      path: '/configure/accountInfo',
      name: 'accountInfo',
      component: AccountInfo,
      props: true
    },
    //환경설정 - 앱 정보
    {
      path: '/configure/appInfo',
      name: 'appInfo',
      component: AppInfo,
      props: true
    },
    //환경설정 - 푸쉬 알림 설정
    {
      path: '/configure/setPush',
      name: 'setPush',
      component: SetPush,
      props: true
    },
    //환경설정 - 언어 선택
    {
      path: '/configure/selLanguage',
      name: 'selLanguage',
      component: SelLanguage,
      props: true
    },
    //환경설정 - 귀가 모드 설정
    {
      path: '/configure/homeComming',
      name: 'homeComming',
      component: HomeComming,
      props: true
    },
    //환경설정 - 통화벨 설정
    {
      path: '/configure/callMode',
      name: 'callMode',
      component: CallMode,
      props: true
    },
    //환경설정 - 일괄소등
    {
      path: '/configure/allSwitchs',
      name: 'allSwitchs',
      component: AllSwitchs,
      props: true
    },
    // 제어 - 환기
    {
      path: '/houseControl/ventilation',
      name: 'ventilation',
      component: Ventilation,
      props: true
    },
    // 제어 - 난방
    {
      path: '/houseControl/heating',
      name: 'heating',
      component: Heating,
      props: true
    },
    // 제어 - 에어컨
    {
      path: '/houseControl/airConditioner',
      name: 'airConditioner',
      component: AirConditioner,
      props: true
    },
    // 제어 - 조명
    {
      path: '/houseControl/light',
      name: 'light',
      component: Light,
      props: true
    },
    // 제어 - 대기전력
    {
      path: '/houseControl/standbyPower',
      name: 'standbyPower',
      component: StandbyPower,
      props: true
    },
    // 제어 - 가스밸브
    {
      path: '/houseControl/gasValve',
      name: 'gasValve',
      component: GasValve,
      props: true
    },
    // 제어 - 방범설정
    {
      path: '/houseControl/security',
      name: 'security',
      component: Security,
      props: true
    },
    // 제어 - 엘리베이터호출
    {
      path: '/houseControl/elevator',
      name: 'elevator',
      component: Elevator,
      props: true
    },
    // 제어 - 커튼
    {
      path: '/houseControl/curtain',
      name: 'curtain',
      component: Curtain,
      props: true
    },
    // 조회
    // 조회 - 공지사항
    {
      path: '/service/notice',
      name: 'notice',
      component: Notice,
      props: true
    },
    // 조회 - 관리비
    {
      path: '/service/adnimistratorExpenses',
      name: 'adnimistratorExpenses',
      component: AdnimistratorExpenses,
      props: true
    },
    // 조회 - 방문자영상
    {
      path: '/service/visitorVideo',
      name: 'visitorVideo',
      component: VisitorVideo,
      props: true
    },
    // 조회 - 홈비타현장
    {
      path: '/service/homeVita',
      name: 'homeVita',
      component: HomeVita,
      props: true
    },
    // 조회 - 홈비타현장 - 월간
    {
      path: '/service/homeVitaM',
      name: 'homeVitaM',
      component: HomeVitaM,
      props: true
    },
    // 조회 - 홈비타현장 - 연간
    {
      path: '/service/homeVitaY',
      name: 'homeVitaY',
      component: HomeVitaY,
      props: true
    },
    // 조회 - 원격검침
    {
      path: '/service/remoteMeterReading',
      name: 'remoteMeterReading',
      component: RemoteMeterReading,
      props: true
    },
    // 조회 - EMS - 일별
    {
      path: '/service/emsDaily',
      name: 'emsDaily',
      component: EmsDaily,
      props: true
    },
    // 조회 - EMS - 월별
    {
      path: '/service/emsMonyhly',
      name: 'emsMonyhly',
      component: EmsMonyhly,
      props: true
    },
    // 조회 - EMS - 월간사용량
    {
      path: '/service/emsM',
      name: 'emsM',
      component: EmsM,
      props: true
    },
    // 조회 - EMS - 연간사용량
    {
      path: '/service/emsY',
      name: 'emsY',
      component: EmsY,
      props: true
    },
    // 조회 - 출입기록
    {
      path: '/service/accessRecord',
      name: 'accessRecord',
      component: AccessRecord,
      props: true
    },
    // 조회 - 택배조회
    {
      path: '/service/courierInquiry',
      name: 'courierInquiry',
      component: CourierInquiry,
      props: true
    },
    // 조회 - 주차위치
    {
      path: '/service/parkingLocation',
      name: 'parkingLocation',
      component: ParkingLocation,
      props: true
    },
    // 조회 - 입차통보
    {
      path: '/service/admissionNotice',
      name: 'admissionNotice',
      component: AdmissionNotice,
      props: true
    },
    // 조회 - 비상리스트
    {
      path: '/service/emergencyList',
      name: 'emergencyList',
      component: EmergencyList,
      props: true
    },
    // 조회 - CCTV
    {
      path: '/service/cctv',
      name: 'cctv',
      component: Cctv,
      props: true
    },
    // 조회 - 인터폰통화
    {
      path: '/service/interPhoneCall',
      name: 'interPhoneCall',
      component: InterPhoneCall,
      props: true
    },
    // 조회 - 통화중
    {
      path: '/service/calling',
      name: 'calling',
      component: Calling,
      props: true
    },
  ]
})


// router.beforeEach(function (to, from, next) {

//   if (!to.matched.some(function (routeInfo) {
//     return routeInfo.meta.authRequired;
//   })) {
//     //토큰 여부를 확인
//     var token = $cookies.get('token');
//     if (token != null) {
//       // next()
//     } else {
//       // alert('토큰이 만료되어 로그인 페이지로 이동 됩니다.(임시)');
//       // next('/login');
//     }
//   } else {  //authRequired : true 는 여기로.     
//     // next(); // 페이지 전환
//   };

// })


export default router
