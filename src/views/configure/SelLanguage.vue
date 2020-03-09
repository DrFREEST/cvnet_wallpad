<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>언어 선택</h1>
      <div class="common-page-top-btns right"></div>
    </div>
    <div class="common-page-content">
      <div class="common-page-list">
        <v-radio-group v-model="radios" :mandatory="false">
          <v-list inactive>
            <v-list-item-group color="primary">
              <v-list-item v-for="(item, index) in items" :key="index" @click>
                <v-list-item-content>
                  <v-radio
                    flat
                    :checked="item.value"
                    :name="item.radioGroupName"
                    :v-model="item.modelName"
                    :label="item.title"
                    :input-value="item.value"
                    :class="item.lang"
                  ></v-radio>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
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
  name: "setPush",
  watch: {},
  data: () => ({
    // item: 1,
    items: [
      {
        title: "한국어",
        radioGroupName: "selRadio",
        modelName: "radio1",
        value: true,
        lang: "ko"
      },
      {
        title: "English",
        radioGroupName: "selRadio",
        modelName: "radio2",
        value: false,
        lang: "en"
      },
      {
        title: "中國語",
        radioGroupName: "selRadio",
        modelName: "radio3",
        value: false,
        lang: "ch"
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