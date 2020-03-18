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
          <h2>커튼</h2>
        </div>
        <div class="common-panel-content">
          <!-- 환기제어 -->
          <div class="one-settings">
            <v-img class="one-setting-icon" src="/src/assets/images/icon_curtain_big.png"></v-img>
            <div class="control-btns">
              <v-btn-toggle v-model="toggleActive">
                <v-btn v-for="(item, index) in items" depressed :key="index">{{item.title}}</v-btn>
              </v-btn-toggle>
            </div>
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
  name: "curtain",
  watch: {},
  data: () => ({
    toggleActive: 0,
    items: [
      { title: "열기", value: 2 },
      { title: "닫기", value: 1 },
      { title: "정지", value: 0 }
    ]
  }),
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>