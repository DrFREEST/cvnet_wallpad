<template>
  <div class="main-page">
    <div class="common-panel">
      <div class="common-panel-top">
        <div class="common-panel-top-btns left">
          <v-btn depressed title="뒤로가기" color="transparent">
            <v-icon class="icon-history-back"></v-icon>
          </v-btn>
        </div>
        <h1>
          <v-img contain src="/src/assets/images/logo_raemian_white.svg"></v-img>
        </h1>
      </div>
      <div class="common-panel-body">
        <div class="common-panel-title">
          <h2>일괄소등</h2>
        </div>
        <div class="common-panel-content">
          <!-- 환기제어 -->
          <div class="one-settings">
            <v-img
              v-if="this.toggleActive==0"
              class="one-setting-icon"
              src="/src/assets/images/icon_all_on_big.png"
            ></v-img>
            <v-img v-else class="one-setting-icon" src="/src/assets/images/icon_all_off_big.png"></v-img>
            <!-- 닫혔을 경우 -->
            <!-- <v-img class="one-setting-icon" src="/src/assets/images/icon_all_off_big.png"></v-img> -->
            <!-- //닫혔을 경우 -->
            <div class="control-btns">
              <v-btn-toggle v-model="toggleActive">
                <v-btn v-for="(item, index) in items" depressed :key="index">{{item.title}}</v-btn>
              </v-btn-toggle>
            </div>
            <p class="control-note">※ 일괄 소등 [설정] 시 모든 조명이 꺼지고, [해제] 시 이전 조명 상태로 돌아갑니다.</p>
          </div>
          <!-- //환기제어 -->
        </div>
        <v-btn color="transparent" depressed class="btn-common-panel-close">
          <v-img src="/src/assets/images/ic_exit.svg"></v-img>
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "allSwitchs",
  watch: {},
  data: () => ({
    toggleActive: 0,
    items: [
      { title: "설정", value: 1, active: true }, //설정/해제 버튼 둘 중 하나만 보이도록 토글 연동 부탁드립니다.
      { title: "해제", value: 1, active: false }
    ]
  }),
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>