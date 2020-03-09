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
          <h2>난방</h2>
          <div class="title-btns">
            <v-btn depressed>전체 켜기</v-btn>
            <v-btn depressed>전체 끄기</v-btn>
          </div>
        </div>
        <div class="common-panel-content">
          <!-- 난방제어 -->
          <div class="one-settings">
            <v-img class="one-setting-icon" src="/src/assets/images/icon_vent_big.png"></v-img>
            <div class="control-btns">
              <v-btn
                v-for="(item, index) in items"
                depressed
                :data-active="item.active"
              >{{item.title}}</v-btn>
            </div>
            <p class="control-note">※ 가스밸브는 안전상 잠금 제어 기능만 사용가능합니다.</p>
          </div>
          <!-- //난방제어 -->
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
  name: "heating",
  watch: {},
  data: () => ({
    items: [
      { title: "강풍", value: 3, active: true },
      { title: "중풍", value: 2, active: false },
      { title: "약풍", value: 1, active: false },
      { title: "끄기", value: 0, active: false }
    ]
  }),
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>