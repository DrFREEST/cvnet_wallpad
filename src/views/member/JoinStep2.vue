<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent" @click="back_page">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>로그인 정보 입력</h1>
      <div class="common-page-top-btns right"></div>
    </div>
    <div class="common-page-content">
      <div class="common-page-form">
        <v-form>
          <div class="form-wrap">
            <v-row>
              <v-col>
                <div class="form-group">
                  <v-text-field
                    class="input-form"
                    placeholder="아이디를 입력해주세요."
                    type="text"
                    label="아이디"
                    color="pointColor1"
                    loader-height="1"
                    v-model="id"
                    ref="id"
                    @keyup="e_check_validation_id"
                  ></v-text-field>
                  <v-btn class="form-btn" depressed outlined @click="on_exist_user" ref="btn_exist_user" v-bind:class="{'pointColor1': id_ok}">중복확인</v-btn>
                </div>
                <div class="form-hint">{{text_id}}</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="input-form"
                  placeholder="비밀번호를 입력해주세요."
                  label="비밀번호"
                  type="password"
                  color="pointColor1"
                  loader-height="1"
                  v-model="pwd"
                  ref="pwd"
                  @keyup="e_check_validation_pwd"
                ></v-text-field>
                <div class="form-hint">{{text_pwd}}</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="input-form"
                  type="password"
                  label="비밀번호 확인"
                  placeholder="비밀번호를 한번 더 입력해주세요."
                  color="pointColor1"
                  loader-height="1"
                  v-model="check_pwd"
                  ref="check_pwd"
                  @keyup="e_check_pwd"
                ></v-text-field>
                <div class="form-hint">{{text_check_pwd}}</div>
              </v-col>
            </v-row>
            <v-btn class="btn-form-agree" block depressed outlined v-bind:class="{'complete': agree_ok}" @click="on_user_terms">
              <v-icon></v-icon>서비스 이용약관 동의
            </v-btn>            
          </div>
          <div class="common-page-form-btn">
            <v-btn
              class="common"
              v-bind:class="{'pointColor1': join_ok}"              
              block
              depressed
              @click="on_join"
            >회원가입</v-btn>            
          </div>
        </v-form>
      </div>
    </div>
    <!-- 서비스 이용약관 팝업 -->
    <v-dialog v-model="dialog" fullscreen color="white">
      <use-terms></use-terms>
    </v-dialog>
    <!-- //서비스 이용약관 팝업 -->
  </div>
</template>
<script src="../../public/javascript/member/joinStep2.js"></script>
