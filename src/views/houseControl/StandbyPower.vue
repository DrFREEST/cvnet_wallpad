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
          <h2>대기전력</h2>
        </div>
        <div class="common-panel-content">
          <v-list class="multi-settings" color="transparent">
            <v-list-item v-for="(item,index) in items" :key="index">
              <v-list-item-title>{{item.title}}</v-list-item-title>
              <v-btn
                depressed
                outlined
                color="transparent"
                class="btn-toggle"
                :ref="'btn-toggle-'+index"
                @click="changeValue(index)"
              >
                <v-img src="/src/assets/images/icon_plug_on.png" class="img-on" v-if="item.value"></v-img>
                <v-img src="/src/assets/images/icon_plug_off.png" class="img-off" v-else></v-img>
              </v-btn>
              <v-btn
                block
                depressed
                class="btn-detail center"
                :class="{on:item.auto==true}"
                @click="setAuto(index)"
              >자동</v-btn>
            </v-list-item>
          </v-list>
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
  name: "standbyPower",
  watch: {},
  data: () => ({
    dialogDetail: false,
    dialogDimming: false,
    targetRoom: "",
    activeIndex: 0,
    model: ["냉방", "약풍", "상하 좌우"],
    items: [
      {
        title: "콘센트1",
        value: true,
        auto: true
      },
      {
        title: "콘센트2",
        value: false,
        auto: false
      },
      {
        title: "콘센트3",
        value: true,
        auto: false
      },
      {
        title: "콘센트4",
        value: true,
        auto: false
      }
    ]
  }),
  computed: {},
  mounted() {},
  methods: {
    toggleSwitch: function() {
      console.log(this.activeIndex);
    },
    openDetail: function(selectIndex, popTitle) {
      this.dialogDetail = true;
      this.targetRoom = popTitle;
      this.activeIndex = selectIndex;
    },
    openDimming: function(selectIndex, popTitle) {
      this.dialogDimming = true;
      this.targetRoom = popTitle;
      this.activeIndex = selectIndex;
    },
    changeValue: function(selIndex) {
      // console.log(index);
      // console.log(this.$refs["btn-toggle-" + index][0]);
      if (this.items[selIndex].value == true) {
        this.items[selIndex].value = false;
      } else {
        this.items[selIndex].value = true;
      }
    },
    setAuto: function(selIndex) {
      if (this.items[selIndex].auto == true) {
        this.items[selIndex].auto = false;
      } else {
        this.items[selIndex].auto = true;
      }
    }
  },
  components: {}
};
</script>