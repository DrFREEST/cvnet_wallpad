<template>
  <div class="login-wrap">
    <div class="login-frame">
      <div class="login-logo">
        <img src="https://dummyimage.com/235x235/fcfcfc/aaaaaa.png?text=Logo%20Img" alt />
      </div>
      <div class="login-form">
        <!-- Start :: Login Form -->
        <v-form></v-form>
        <form action>
          <div>
            <v-row>
              <v-col>
                <v-select
                  v-model="select"
                  :items="locationItems"
                  label="지역 선택"
                  v-on:focus="textFieldChangeLabel"
                  v-on:blur="textFieldChangeLabel"
                  data-focus-label="지역"
                  data-blur-label="지역 선택"
                  color="pointColor1"
                  loader-height="1"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  v-model="select"
                  :items="areaItems"
                  label="단지 선택"
                  v-on:focus="textFieldChangeLabel"
                  v-on:blur="textFieldChangeLabel"
                  data-focus-label="단지"
                  data-blur-label="단지 선택"
                  color="pointColor1"
                  loader-height="1"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="input-form"
                  label="아이디 입력"
                  v-on:focus="textFieldChangeLabel"
                  v-on:blur="textFieldChangeLabel"
                  data-focus-label="아이디"
                  data-blur-label="아이디 입력"
                  color="pointColor1"
                  loader-height="1"
                  type="text"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="input-form"
                  label="비밀번호 입력"
                  v-on:focus="textFieldChangeLabel"
                  v-on:blur="textFieldChangeLabel"
                  data-focus-label="비밀번호"
                  data-blur-label="비밀번호 입력"
                  color="pointColor1"
                  loader-height="1"
                  type="password"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn
              block
              color="submit"
              active-class="on"
              type="submit"
              class="btn-login"
              @click="submit"
              to="/Home"
            >로그인</v-btn>
          </div>
        </form>
        <!-- End :: Login Form -->
      </div>
      <!-- Start :: Login Menu -->
      <div class="login-menu">
        <router-link to="/join" class="btn-login-menu">스마트홈 앱이 처음이신가요?</router-link>
        <router-link to="/findIdPass" class="btn-login-menu">아이디 또는 비밀번호 찾기</router-link>
      </div>
      <!-- End :: Login Menu -->
    </div>
  </div>
</template>
<script>
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
  methods: {
    submit: function() {},
    textFieldChangeLabel: function(target, status) {
      var targetInput = event.target;
      var targetParent = event.target.parentNode;
      console.log(targetParent.className);
      if (
        targetParent.className == "v-select__slot" ||
        targetParent.className == "v-select__selections"
      ) {
        if (targetParent.className == "v-select__selections") {
          console.log("select");
          var targetLabel = targetParent.parentNode.getElementsByTagName(
            "label"
          )[0];
        } else {
          var targetLabel = event.target.parentNode.getElementsByTagName(
            "label"
          )[0];
        }
      } else {
        var targetLabel = event.target.parentNode.getElementsByTagName(
          "label"
        )[0];
      }

      if (event.type == "focus") {
        targetLabel.innerHTML = targetInput.getAttribute("data-focus-label");
      } else if (event.type == "blur") {
        targetLabel.innerHTML = targetInput.getAttribute("data-blur-label");
      }
    }
  },
  components: {}
};
</script>
