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
      { title: "환경설정 - 설정 목록", routingPage: "/configure/settingList" },
      { title: "환경설정 - 계정 정보", routingPage: "/configure/accountInfo" },
      { title: "환경설정 - 앱 정보", routingPage: "/configure/appInfo" },
      { title: "환경설정 - 푸쉬 알림 설정", routingPage: "/configure/setPush" },
      { title: "환경설정 - 언어 선택", routingPage: "/configure/selLanguage" },
      {
        title: "환경설정 - 귀가 모드 설정",
        routingPage: "/configure/homeComming"
      },
      { title: "환경설정 - 통화벨 설정", routingPage: "/configure/callMode" }
    ]
  })
};
</script>
<style>
</style>
