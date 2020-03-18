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
                <v-img src="/src/assets/images/icon_heat_on.png" class="img-on" v-if="item.value"></v-img>
                <v-img src="/src/assets/images/icon_heat_off.png" class="img-off" v-else></v-img>
              </v-btn>
              <v-btn block depressed class="btn-detail" @click="openDetail(index,item.title)">
                상세설정
                <v-icon class="icon-detail"></v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
        </div>
        <v-btn color="transparent" depressed class="btn-common-panel-close">
          <v-img src="/src/assets/images/ic_exit.svg"></v-img>
        </v-btn>
      </div>
    </div>
    <!-- 상세설정 팝업 -->
    <v-dialog v-model="dialog" content-class="popup-detail" color="transparent" max-width="517px">
      <div class="common-panel">
        <div class="common-panel-body">
          <div class="common-panel-title">
            <h2>{{targetRoom}} 난방</h2>
            <div class="title-btns">
              <v-btn
                depressed
                :class="{on:items[activeIndex].value, off:!items[activeIndex].value}"
                @click="items[activeIndex].value = true;"
              >켜기</v-btn>
              <v-btn
                depressed
                :class="{on:!items[activeIndex].value, off:items[activeIndex].value}"
                @click="items[activeIndex].value = false;"
              >끄기</v-btn>
            </div>
          </div>
          <div class="common-panel-content">
            <!-- 온도 컨트롤 -->
            <div class="control-box">
              <div class="control-status">
                <dl class="current">
                  <dt>현재 온도</dt>
                  <dd>
                    28
                    <span class="unit">˚</span>
                  </dd>
                </dl>
                <dl class="set">
                  <dt>설정 온도</dt>
                  <dd>
                    28
                    <span class="unit">˚</span>
                  </dd>
                </dl>
              </div>
              <v-btn depressed class="btn-prev">-</v-btn>
              <v-btn depressed class="btn-next">+</v-btn>
            </div>
            <v-btn depressed block class="btn-set-submit">설정</v-btn>
            <!-- //온도 컨트롤 -->
          </div>
          <v-btn color="transparent" depressed class="btn-common-panel-close">
            <v-img src="/src/assets/images/ic_exit.svg"></v-img>
          </v-btn>
        </div>
      </div>
    </v-dialog>
    <!-- //상세설정 팝업 -->
  </div>
</template>
<script>
export default {
  name: "heating",
  watch: {},
  data: () => ({
    dialog: false,
    targetRoom: "",
    activeIndex: 0,
    items: [
      { title: "거실", value: true },
      { title: "안방", value: false },
      { title: "방1", value: true },
      { title: "방2", value: false },
      { title: "방3", value: true }
    ],
    detailItems: [{}]
  }),
  computed: {},
  mounted() {},
  methods: {
    toggleSwitch: function() {
      console.log(this.activeIndex);
    },
    openDetail: function(selectIndex, popTitle) {
      this.dialog = true;
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
    }
  },
  components: {}
};
</script>