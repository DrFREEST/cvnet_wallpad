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
          <h2>엘리베이터 호출</h2>
        </div>
        <div class="common-panel-content">
          <div class="elevator-setting">
            <h3>{{title}}</h3>
            <div class="current">
              <h4>엘리베이터 위치</h4>
              <div class="value">{{currentFloor}}</div>
            </div>
            <div class="action-btns">
              <v-btn-toggle v-model="toggleActive">
                <v-btn depressed class="btn-elevetor">▲</v-btn>
                <v-btn depressed class="btn-elevetor">▼</v-btn>
              </v-btn-toggle>
            </div>
          </div>
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
  name: "elevator",
  watch: {},
  data: () => ({
    dialogDimming: false,
    targetRoom: "",
    toggleActive: undefined,
    title: "엘리베이터 1호",
    currentFloor: 24, // 현재 층
    waitUp: false, // 올라가기 대기 status
    waitDown: false // 내려가기 대기 status
  }),
  computed: {},
  mounted() {},
  methods: {
    callUp: function() {
      if (this.waitUp == true) {
        this.waitUp = false;
      } else {
        this.waitUp = true;
      }
    },
    callDown: function() {
      if (this.waitDown == true) {
        this.waitDown = false;
      } else {
        this.waitDown = true;
      }
    }
  },
  components: {}
};
</script>