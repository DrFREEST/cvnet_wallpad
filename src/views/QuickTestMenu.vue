<template>
  <div class="test-quick-menu">
    <v-menu fixed max-height="90vh" offset-y bottom z-index="999999">
      <template v-slot:activator="{ on }">
        <v-btn class="test-menu-btn" color="primary" dark v-on="on">테스트용 퀵 메뉴</v-btn>
      </template>
      <v-list class="test-menu-list">
        <v-list-item class="test-menu-list-item" v-for="(item, index) in items" :key="index" @click>
          <v-list-item-title>
            <router-link :to="item.routingPage">{{ item.title }}</router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: "메인", routingPage: "/home" },
      { title: "로그인", routingPage: "/login" },
      { title: "로그인 - 세대 정보 입력", routingPage: "/member/joinStep1" },
      { title: "로그인 - 로그인 정보 입력", routingPage: "/member/joinStep2" },
      { title: "로그인 - 서비스 이용 약관", routingPage: "/member/UseTerms" },
      {
        title: "로그인 - 인증 성공",
        routingPage: "/member/certificationSuccess"
      },
      {
        title: "로그인 - 인증 실패",
        routingPage: "/member/certificationFail"
      },
      {
        title: "로그인 - 아이디 또는 비밀번호 찾기",
        routingPage: "/member/findIdPass"
      },
      { title: "로그인 - 아이디 찾기", routingPage: "/member/findId" },
      {
        title: "로그인 - 아이디 찾기 결과",
        routingPage: "/member/findIdResult"
      },
      { title: "로그인 - 비밀번호 찾기", routingPage: "/member/findPass" },
      { title: "로그인 - 비밀번호 변경", routingPage: "/member/changePass" },
      // 환경설정
      { title: "환경설정 - 설정 목록", routingPage: "/configure/settingList" },
      { title: "환경설정 - 계정 정보", routingPage: "/configure/accountInfo" },
      { title: "환경설정 - 앱 정보", routingPage: "/configure/appInfo" },
      { title: "환경설정 - 푸쉬 알림 설정", routingPage: "/configure/setPush" },
      { title: "환경설정 - 언어 선택", routingPage: "/configure/selLanguage" },
      {
        title: "환경설정 - 귀가 모드 설정",
        routingPage: "/configure/homeComming"
      },
      { title: "환경설정 - 통화벨 설정", routingPage: "/configure/callMode" },
      // 제어
      { title: "제어 - 환기", routingPage: "/houseControl/ventilation" },
      { title: "제어 - 난방", routingPage: "/houseControl/heating" },
      { title: "제어 - 에어컨", routingPage: "/houseControl/airConditioner" },
      { title: "제어 - 조명", routingPage: "/houseControl/light" },
      { title: "제어 - 대기전력", routingPage: "/houseControl/standbyPower" },
      { title: "제어 - 가스밸브", routingPage: "/houseControl/gasValve" },
      { title: "제어 - 방범설정", routingPage: "/houseControl/security" },
      { title: "제어 - 엘리베이터호출", routingPage: "/houseControl/elevator" },
      { title: "제어 - 커튼", routingPage: "/houseControl/curtain" },
      { title: "제어 - 일괄소등", routingPage: "/houseControl/allSwitchs" },
      // 조회
      { title: "조회 - 공지사항", routingPage: "/service/notice" },
      { title: "조회 - 관리비", routingPage: "/service/adnimistratorExpenses" },
      { title: "조회 - 방문자영상", routingPage: "/service/visitorVideo" },
      { title: "조회 - 홈비타현장", routingPage: "/service/homeVita" },
      { title: "조회 - 홈비타현장 - 월간", routingPage: "/service/homeVitaM" },
      { title: "조회 - 홈비타현장 - 연간", routingPage: "/service/homeVitaY" },
      { title: "조회 - 원격검침", routingPage: "/service/remoteMeterReading" },
      { title: "조회 - EMS - 일별", routingPage: "/service/emsDaily" },
      { title: "조회 - EMS - 월별", routingPage: "/service/emsMonyhly" },
      { title: "조회 - EMS - 월간사용량", routingPage: "/service/emsM" },
      { title: "조회 - EMS - 연간사용량", routingPage: "/service/emsY" },
      { title: "조회 - 출입기록", routingPage: "/service/accessRecord" },
      { title: "조회 - 택배조회", routingPage: "/service/courierInquiry" },
      { title: "조회 - 주차위치", routingPage: "/service/parkingLocation" },
      { title: "조회 - 입차통보", routingPage: "/service/admissionNotice" },
      { title: "조회 - 비상리스트", routingPage: "/service/emergencyList" },
      { title: "조회 - CCTV", routingPage: "/service/cctv" },
      { title: "조회 - 인터폰통화", routingPage: "/service/interPhoneCall" },
      { title: "조회 - 통화중", routingPage: "/service/calling" }
    ]
  })
};
</script>
<style>
</style>
