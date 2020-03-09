<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>계정 정보</h1>
      <div class="common-page-top-btns right"></div>
    </div>
    <div class="common-page-content">
      <div class="common-page-list">
        <v-list disabled>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, index) in items" :key="index" @click>
              <v-list-item-content>
                <dl>
                  <dt>{{ item.title }}</dt>
                  <dd>{{ item.value }}</dd>
                </dl>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </div>
    <div class="common-page-bottom">
      <v-btn depressed outlined to="/member/changePass">패스워드 변경</v-btn>
      <v-btn depressed outlined to="/login">로그아웃</v-btn>
      <p>스마트폰 1대당 1개의 계정으로만 로그인할 수 있습니다. 로그아웃하시면 로그인 화면으로 전환됩니다.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "accountInfo",
  watch: {},
  data: () => ({
    // item: 1,
    items: [
      { title: "아파트명", value: "강남 삼성 아파트" },
      { title: "동호수", value: "102동 703호" },
      { title: "아이디", value: "CVNET1234" }
    ]
  }),
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>