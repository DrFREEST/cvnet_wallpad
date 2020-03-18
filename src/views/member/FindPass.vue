<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent" @click="back_page">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>비밀번호 찾기</h1>
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
                  placeholder="아이디를 입력해주세요."
                  type="text"
                  label="아이디"
                  color="pointColor1"
                  loader-height="1"
                  v-model="id"
                  ref="id"
                  @keyup="e_check_validation"
                ></v-text-field>
              </v-col>
            </v-row>
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
            <v-btn
              class="common"
              color="transparent"
              block
              depressed
              @click="on_find_pwd"
              v-bind:class="{'pointColor1': is_ok}"
            >임시 비밀번호 발급</v-btn>
            <!-- 폼 작성 완료 시 -->
            <!--
            <v-btn
              class="common"
              color="pointColor1"
              block
              depressed
              @click.stop="dialog = true"
            >임시 비밀번호 발급</v-btn>
            -->
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
            <strong>임시 비밀번호:</strong> <span>{{temp_pwd}}</span>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="closePop" class="btn-confirm">확인</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- //알림팝업 -->
    </div>
  </div>
</template>
<script src="../../public/javascript/member/findPass.js"></script>