<template>
  <div class="common-page">
    <div class="common-page-content">
      <div class="common-page-result-message">
        <v-icon class="icon-fail"></v-icon>
        <p>
          이 기기는 이미
          <br />인증 받았습니다!
        </p>
      </div>
    </div>
    <div class="common-page-bottom">
      <v-btn depressed outlined to="/login">기존 인증정보로 로그인하기</v-btn>
      <v-btn depressed outlined @click="on_remove_device_auth">재인증 받기</v-btn>
    </div>
  </div>
</template>
<script src="../../public/javascript/member/certificationFail.js"></script>