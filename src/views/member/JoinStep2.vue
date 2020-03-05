<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent">
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
                  ></v-text-field>
                  <v-btn class="form-btn" depressed outlined>중복확인</v-btn>
                </div>
                <div class="form-hint">영어 혹은 숫자로 6자리 이상</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="input-form"
                  placeholder="비밀번호를 입력해주세요."
                  label="비밀번호"
                  type="text"
                  color="pointColor1"
                  loader-height="1"
                ></v-text-field>
                <div class="form-hint">영어, 숫자, 특수문자를 혼합하여 8자리 이상</div>
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
                ></v-text-field>
                <div class="form-hint">상단의 비밀번호 재입력</div>
              </v-col>
            </v-row>
            <v-btn class="btn-form-agree" block depressed outlined>
              <v-icon></v-icon>서비스 이용약관 동의
            </v-btn>
            <!-- 이용약관 동의 후 -->
            <v-btn class="btn-form-agree complete" block depressed outlined to="/member/UseTerms">
              <v-icon></v-icon>서비스 이용약관 동의
            </v-btn>
            <!-- //이용약관 동의 후 -->
          </div>
          <div class="common-page-form-btn">
            <v-btn
              class="common"
              color="transparent"
              block
              depressed
              to="/member/CertificationFail"
            >회원가입</v-btn>
            <!-- 폼 작성 완료 시 -->
            <v-btn
              class="common"
              color="pointColor1"
              block
              depressed
              to="/member/CertificationSuccess"
            >회원가입</v-btn>
            <!-- //폼 작성 완료 시 -->
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "joinStep2",
  watch: {},
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>