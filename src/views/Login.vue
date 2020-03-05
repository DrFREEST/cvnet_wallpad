<template>
  <div class="login-wrap">
    <div class="login-frame">
      <div class="login-logo">
        <!-- <img src="https://dummyimage.com/235x235/fcfcfc/aaaaaa.png?text=Logo%20Img" alt /> -->
        <img src="/src/assets/images/logo_raemian.svg" alt />
      </div>
      <div class="login-form">
        <!-- Start :: Login Form -->
        <v-form>
          <div>
            <v-row>
              <v-col>
                <v-select
                  placeholder="지역 선택"
                  label="지역"
                  v-model="select"
                  :items="locationItems"
                  color="pointColor1"
                  loader-height="1"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  placeholder="단지 선택"
                  label="단지"
                  v-model="select"
                  :items="areaItems"
                  color="pointColor1"
                  loader-height="1"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="input-form"
                  placeholder="아이디 입력"
                  label="아이디"
                  type="text"
                  color="pointColor1"
                  loader-height="1"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="input-form"
                  placeholder="비밀번호 입력"
                  label="비밀번호"
                  type="password"
                  color="pointColor1"
                  loader-height="1"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn
              class="btn-login"
              type="submit"
              block
              depressed
              color="submit"
              active-class="on"
              to="/Home"
            >로그인</v-btn>
          </div>
        </v-form>
        <!-- End :: Login Form -->
      </div>
      <!-- Start :: Login Menu -->
      <div class="login-menu">
        <v-btn
          class="btn-login-menu"
          to="/member/JoinStep1"
          depressed
          color="transparent"
        >스마트홈 앱이 처음이신가요?</v-btn>
        <v-btn
          class="btn-login-menu"
          to="/member/findIdPass"
          depressed
          color="transparent"
        >아이디 또는 비밀번호 찾기</v-btn>
      </div>
      <!-- End :: Login Menu -->
    </div>
  </div>
</template>
<script>
// Custom Script
export default {
  name: "login",
  watch: {},
  computed: {},
  mounted() {},

  data() {
    return {
      select: null,
      locationItems: ["Item 1", "Item 2", "Item 3", "Item 4"],
      areaItems: ["Item 1", "Item 2", "Item 3", "Item 4"],
      hello: "world"
    };
  },
  methods: {},
  components: {}
};
</script>
