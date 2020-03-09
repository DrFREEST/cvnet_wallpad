<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>귀가 모드 설정</h1>
      <div class="common-page-top-btns right"></div>
    </div>
    <div class="common-page-content">
      <div class="common-page-list">
        <v-list inactive>
          <v-list-item-group flat color="primary">
            <v-list-item v-for="(item, index) in items" :key="index" @click>
              <v-list-item-content>
                <v-checkbox
                  flat
                  :checked="item.value"
                  :name="item.radioGroupName"
                  :v-model="item.modelName"
                  :label="item.title"
                  :input-value="item.value"
                ></v-checkbox>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <p class="list-note">냉/난방 ON 동시 설정은 불가합니다. 귀가 모드 실행 시 거실의 디바이스만 ON(또는 Open) 됩니다.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "homeComming",
  watch: {},
  data: () => ({
    // item: 1,
    items: [
      {
        title: "조명 ON",
        radioGroupName: "selRadio",
        modelName: "radio1",
        value: true
      },
      {
        title: "냉방 ON",
        radioGroupName: "selRadio",
        modelName: "radio2",
        value: true
      },
      {
        title: "커튼 Open",
        radioGroupName: "selRadio",
        modelName: "radio2",
        value: false
      },
      {
        title: "난방 ON",
        radioGroupName: "selRadio",
        modelName: "radio2",
        value: false
      }
    ]
  }),
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>