<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>푸쉬 알림 설정</h1>
      <div class="common-page-top-btns right"></div>
    </div>
    <div class="common-page-content">
      <div class="common-page-list">
        <v-list flat inactive>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, index) in items" :key="index" @click>
              <v-list-item-content>
                <v-switch
                  flat
                  :v-model="item.modelName"
                  :label="item.title"
                  :input-value="item.value"
                ></v-switch>
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
  name: "setPush",
  watch: {},
  data: () => ({
    // item: 1,
    items: [
      { title: "방범모드 변경 시", modelName: "switch1", value: true },
      { title: "입차통보 시", modelName: "switch2", value: false },
      { title: "신규 공지/택배 등록 시", modelName: "switch3", value: true }
    ]
  }),
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>