<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent" @click="back_page">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>세대 정보 입력</h1>
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
                  placeholder="동을 입력해주세요."
                  type="text"
                  label="동"
                  color="pointColor1"
                  loader-height="1"
                  v-model="dong"
                  ref="dong"
                  @keyup="e_check_validation"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="input-form"
                  placeholder="호를 입력해주세요."
                  label="호"
                  type="text"
                  color="pointColor1"
                  loader-height="1"
                  v-model="ho"
                  ref="ho"
                  @keyup="e_check_validation"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="input-form"
                  type="text"
                  label="인증키"
                  placeholder="인증키를 입력해주세요."
                  color="pointColor1"
                  loader-height="1"
                  v-model="house_key"
                  ref="house_key"
                  @keyup="e_check_validation"
                ></v-text-field>
                <div class="form-hint">
                  인증키는 월패드의
                  <span class="dark">[설정] > [인증키]</span>에서 확인할 수 있습니다.
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="common-page-form-btn">
            <v-btn class="common" color="transparent" block depressed v-bind:class="{'pointColor1': is_ok}" @click="on_verify_housekey">인증 받기</v-btn>            
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script src="../../public/javascript/member/joinStep1.js"></script>