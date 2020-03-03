<template>
  <div class="test-quick-menu">
    <v-menu fixed max-height="300px" offset-y bottom z-index="999999">
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
      { title: "로그인 메인", routingPage: "/login" },
      { title: "로그인 - 세대 정보 입력", routingPage: "/login/joinStep1" },
      { title: "로그인 - 로그인 정보 입력", routingPage: "/login/joinStep2" },
      { title: "로그인 - 서비스 이용 약관", routingPage: "/login/UseTerms" },
      {
        title: "로그인 - 인증 성공",
        routingPage: "/login/CertificationSuccess"
      },
      {
        title: "로그인 - 인증 실패",
        routingPage: "/login/CertificationFail"
      },
      {
        title: "로그인 - 아이디 또는 비밀번호 찾기",
        routingPage: "/login/FindIdPass"
      },
      { title: "로그인 - 아이디 찾기", routingPage: "/login/FindId" },
      { title: "로그인 - 비밀번호 찾기", routingPage: "/login/FindPass" }
    ]
  })
};
</script>
<style>
</style>
