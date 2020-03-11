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
          <h2>방범설정</h2>
        </div>
        <div class="common-panel-content">
          <div class="security-control">
            <v-list flat color="transparent">
              <v-list-item-group v-model="item">
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-icon :class="'icon_'+item.class"></v-icon>
                  </v-list-item-content>
                  <!-- <v-btn></v-btn> -->
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <p class="control-note">※ 일괄 소등 [설정] 시 모든 조명이 꺼지고, [해제] 시 이전 조명 상태로 돌아갑니다.</p>
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
  name: "security",
  watch: {},
  data: () => ({
    item: 0,
    items: [
      { title: "외출모드", class: "goout", active: true },
      { title: "재실모드", class: "home", active: false },
      { title: "취침모드", class: "sleep", active: false }
    ]
  }),
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>