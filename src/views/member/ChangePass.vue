<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent">
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
          </div>
          <div class="common-page-form-btn">
            <v-btn class="common" color="transparent" block depressed to="/">적용</v-btn>
            <!-- 폼 작성 완료 시 -->
            <v-btn class="common" color="pointColor1" block depressed to="/">적용</v-btn>
            <!-- //폼 작성 완료 시 -->
          </div>
        </v-form>
      </div>

      <!-- 알림팝업 -->
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-title>알림</v-card-title>
          <v-card-text>
            임시비밀번호가 발급되었습니다.
            <br />
            <br />
            <strong>임시 비밀번호:</strong> ZHFKSK19
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="dialog = false" class="btn-confirm">확인</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- //알림팝업 -->
    </div>
  </div>
</template>
<script>
export default {
  name: "changePass",
  watch: {},
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>