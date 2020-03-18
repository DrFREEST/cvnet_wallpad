<template>
  <div class="main-page">
    <div class="common-panel">
      <div class="common-panel-top">
        <div class="common-panel-top-btns left">
          <v-btn title="뒤로가기" depressed color="transparent">
            <v-icon class="icon-history-back"></v-icon>
          </v-btn>
        </div>
        <h1>
          <v-img src="/src/assets/images/logo_raemian_white.svg" contain></v-img>
        </h1>
      </div>
      <div class="common-panel-body">
        <div class="common-panel-title">
          <h2>가스</h2>
        </div>
        <div class="common-panel-content">
          <!-- 환기제어 -->
          <div class="one-settings">
            <v-img class="one-setting-icon" src="/src/assets/images/icon_gas_closed_big.png" v-if="this.toggleActive==0"></v-img>
            <v-img class="one-setting-icon" src="/src/assets/images/icon_gas_opened_big.png" v-else></v-img>
            <!-- 닫혔을 경우 -->
            <!-- <v-img class="one-setting-icon" src="/src/assets/images/icon_gas_closed_big.png"></v-img> -->
            <!-- //닫혔을 경우 -->
            <div class="control-btns">
              <v-btn-toggle v-model="toggleActive">
                <v-btn v-for="(item, index) in items" depressed :data-active="item.active" key="index">{{item.title}}</v-btn>
              </v-btn-toggle>
            </div>
            <p class="control-note">※ 가스밸브는 안전상 잠금 제어 기능만 사용가능합니다.</p>
          </div>
          <!-- //환기제어 -->
        </div>
        <v-btn class="btn-common-panel-close" color="transparent" depressed>
          <v-img src="/src/assets/images/ic_exit.svg"></v-img>
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "gasValve",
  watch: {},
  data: () => ({
    toggleActive: undefined,
    items: [{ title: "잠금", value: 1, active: false }]
  }),
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>