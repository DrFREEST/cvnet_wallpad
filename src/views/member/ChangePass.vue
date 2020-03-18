<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent" @click="back_page">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>비밀번호 변경</h1>
      <div class="common-page-top-btns right"></div>
    </div>
    <div class="common-page-content">
      <div class="common-page-form">
        <v-form>
          <div class="form-wrap">
            <v-row>
              <v-col>
                <v-text-field
                  class="input-form"
                  placeholder="비밀번호를 입력해주세요."
                  type="text"
                  label="비밀번호"
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
                  type="text"
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
          </div>
          <div class="common-page-form-btn">
            <v-btn class="common" color="transparent" block depressed v-bind:class="{'pointColor1': check_ok}" @click="on_change_pwd">적용</v-btn>            
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script src="../../public/javascript/member/changePass.js"></script>