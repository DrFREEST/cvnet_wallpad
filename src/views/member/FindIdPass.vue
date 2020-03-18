<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent" @click="back_page">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>아이디 또는 비밀번호 찾기</h1>
      <div class="common-page-top-btns right"></div>
    </div>
    <div class="common-page-content">
      <div class="find-idpass-wrap">
        <v-btn class="btn-find-idpass" color="white" to="/member/findId">아이디 찾기</v-btn>
        <v-btn class="btn-find-idpass" color="white" to="/member/findPass">비밀번호 찾기</v-btn>
      </div>
    </div>
  </div>
</template>
<script src="../../public/javascript/member/findIdPass.js"></script>