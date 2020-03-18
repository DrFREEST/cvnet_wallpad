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
          <h2>에어컨</h2>
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
                <v-img
                  src="/src/assets/images/icon_air_conditioner_on.png"
                  class="img-on"
                  v-if="item.value"
                ></v-img>
                <v-img src="/src/assets/images/icon_air_conditioner_off.png" class="img-off" v-else></v-img>
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
            <h2>{{targetRoom}} 에어컨</h2>
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
            <div class="control-detail">
              <v-list flat color="transparent">
                <v-list-item v-for="(detailItem,index) in detailMenus" :key="index">
                  <v-img :src="detailItem.iconSrc"></v-img>
                  <v-list-item-title>{{detailItem.title}}</v-list-item-title>
                  <v-select
                    type="text"
                    v-model="model"
                    :items="detailItem.subList"
                    :placeholder="detailItem.subList[0]"
                  ></v-select>
                </v-list-item>
              </v-list>
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
  name: "airConditioner",
  watch: {},
  data: () => ({
    dialog: false,
    targetRoom: "",
    activeIndex: 0,
    model: ["냉방", "약풍", "상하 좌우"],
    items: [
      { title: "거실", value: true },
      { title: "안방", value: false },
      { title: "방1", value: true },
      { title: "방2", value: false },
      { title: "방3", value: true }
    ],
    //에어컨 상세 설정용 옵션항목
    detailMenus: [
      {
        title: "운전모드",
        iconSrc: "/src/assets/images/ic_aircon_mode.svg",
        subList: ["냉방", "난방", "송풍", "청정"]
      },
      {
        title: "풍량 설정",
        iconSrc: "/src/assets/images/ic_aircon_capa.svg",
        subList: ["강풍", "중풍", "약풍", "미풍", "무풍"]
      },
      {
        title: "풍향 설정",
        iconSrc: "/src/assets/images/ic_aircon_direction.svg",
        subList: ["상하 좌우", "상하", "좌우", "고정"]
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