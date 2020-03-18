<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>통화모드 설정</h1>
      <div class="common-page-top-btns right"></div>
    </div>
    <div class="common-page-content">
      <div class="common-page-list">
        <v-radio-group v-model="radios" :mandatory="false">
          <v-list inactive>
            <v-radio-group v-model="radioGroup">
              <v-radio
                v-for="(item,index) in items"
                :key="index"
                :label="item.title"
                :value="index"
              ></v-radio>
            </v-radio-group>
          </v-list>
        </v-radio-group>
        <!-- <v-radio-group v-model="radios">
          <v-radio
            v-for="(item, index) in items"
            :key="index"
            :label="item.title"
            :value="items.value"
          ></v-radio>
        </v-radio-group>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "callMode",
  watch: {},
  data: () => ({
    radioGroup: 1,
    items: [
      {
        title: "통화벨로 알림",
        radioGroupName: "selRadio",
        modelName: "radio1",
        value: true
      },
      {
        title: "메시지로 알림",
        radioGroupName: "selRadio",
        modelName: "radio2",
        value: false
      }
    ],
    radios: "radio-1"
  }),
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>