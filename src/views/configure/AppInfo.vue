<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>앱 정보</h1>
      <div class="common-page-top-btns right"></div>
    </div>
    <div class="common-page-content">
      <div class="common-page-list">
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, index) in items" :key="index" @click>
              <v-list-item-content>
                <v-list-item-title>
                  <router-link :to="item.routingPage">{{ item.title }}</router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "appInfo",
  watch: {},
  data: () => ({
    // item: 1,
    items: [
      { title: "이용약관", routingPage: "/member/UseTerms" },
      { title: "개인정보 취급방침", routingPage: "/member/UseTerms" }
    ]
  }),
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>