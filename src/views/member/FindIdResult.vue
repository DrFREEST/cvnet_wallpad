<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent" @click="back_page">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>아이디 찾기</h1>
      <div class="common-page-top-btns right"></div>
    </div>
    <div class="common-page-content">
      <div class="common-page-list">
        <v-list disabled>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-content>
                <v-list-item-title v-html="item.id"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </div>
    <div class="common-page-bottom">
      <v-btn depressed outlined to="/member/FindPass">비밀번호 찾기</v-btn>
      <v-btn depressed outlined to="/login">로그인 화면으로</v-btn>
    </div>
  </div>
</template>
<script src="../../public/javascript/member/findIdResult.js"></script>
