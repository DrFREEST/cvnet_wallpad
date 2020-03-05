<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>아이디 찾기</h1>
      <div class="common-page-top-btns right"></div>
    </div>
    <div class="common-page-content">
      <div class="common-page-list">
        <v-list disabled>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-content>
                <v-list-item-title v-html="item.text"></v-list-item-title>
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
<script>
export default {
  name: "findId",
  watch: {},
  data: () => ({
    // item: 1,
    items: [
      { text: "CVNET" },
      { text: "CVNET1234" },
      { text: "WALLPAD" },
      { text: "SmartHome1" }
    ]
  }),
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>