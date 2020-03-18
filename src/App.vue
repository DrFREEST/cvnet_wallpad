<template>
  <v-app>
    <!-- Start :: 테스트용 퀵 메뉴 -->
    <QuickTestMenu></QuickTestMenu>

    <!-- End ::테스트용 퀵 메뉴 -->

    <router-view class="wrapper" />    
  </v-app>
</template>
<script>

import QuickTestMenu from "./views/QuickTestMenu";
export default {
  components: {
    QuickTestMenu
  },
  mounted() {
    console.log("Test메뉴 로드 완료");
    //로그인 페이지로 이동
    if(this.$route.name != "login"){
      this.$router.replace('/login');
    }
  }
};
</script>
<style>
</style>
