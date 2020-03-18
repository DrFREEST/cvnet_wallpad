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
          <h2>조명</h2>
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
                <v-img src="/src/assets/images/icon_light_on.png" class="img-on" v-if="item.value"></v-img>
                <v-img src="/src/assets/images/icon_light_off.png" class="img-off" v-else></v-img>
              </v-btn>
              <v-btn
                v-if="item.subType=='detail'"
                block
                depressed
                class="btn-detail"
                @click="openDetail(index,item.title)"
              >
                개별 제어
                <v-icon class="icon-detail"></v-icon>
              </v-btn>
              <v-btn
                v-else-if="item.subType=='dimming'"
                block
                depressed
                class="btn-detail"
                @click="openDimming(index,item.title)"
              >
                디밍
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
    <v-dialog
      v-model="dialogDetail"
      content-class="popup-detail"
      color="transparent"
      max-width="517px"
    >
      <div class="common-panel">
        <div class="common-panel-body">
          <div class="common-panel-title">
            <h2>{{targetRoom}} 조명</h2>
            <h3>모두 OFF 되어야 이전단계에서도 OFF 표시됩니다.</h3>
          </div>
          <div class="common-panel-content">
            <!-- 조명 상세 설정 -->
            <div class="detail-light">
              <v-list color="transparent">
                <v-list-item
                  v-for="(detailItem,detailIndex) in items[activeIndex].details"
                  :key="detailIndex"
                >
                  <v-list-item-title>{{detailItem.title}}</v-list-item-title>
                  <v-btn
                    depressed
                    outlined
                    color="transparent"
                    class="btn-toggle"
                    :ref="'btn-toggle-'+activeIndex"
                    @click="changeDetailValue(activeIndex,detailIndex)"
                  >
                    <v-img
                      contain
                      src="/src/assets/images/icon_light_on_round.png"
                      class="img-on"
                      v-if="detailItem.value==true"
                    ></v-img>
                    <v-img src="/src/assets/images/icon_light_off_round.png" class="img-off" v-else></v-img>
                  </v-btn>
                </v-list-item>
              </v-list>
            </div>
            <!-- //조명 상세 설정 -->
          </div>
          <v-btn color="transparent" depressed class="btn-common-panel-close">
            <v-img src="/src/assets/images/ic_exit.svg"></v-img>
          </v-btn>
        </div>
      </div>
    </v-dialog>
    <!-- //상세설정 팝업 -->
    <!-- 디밍 팝업 -->
    <v-dialog
      v-model="dialogDimming"
      content-class="popup-detail"
      color="transparent"
      max-width="517px"
    >
      <div class="common-panel">
        <div class="common-panel-body">
          <div class="common-panel-title">
            <h2>{{targetRoom}} 조명</h2>
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
            <!-- 디밍 컨트롤 -->
            <div class="dim-control">
              <div class="current-value">{{items[activeIndex].details[0].value}}%</div>
              <v-slider v-model="items[activeIndex].details[0].value" min="0" max="100">
                <template v-slot:prepend>
                  <v-btn class="btn-minus" depressed @click="dimMinus(activeIndex)">-</v-btn>
                </template>

                <template v-slot:append>
                  <v-btn class="btn-plus" depressed @click="dimPlus(activeIndex)">+</v-btn>
                </template>
              </v-slider>
            </div>
            <!-- //디밍 컨트롤 -->
          </div>
          <v-btn color="transparent" depressed class="btn-common-panel-close">
            <v-img src="/src/assets/images/ic_exit.svg"></v-img>
          </v-btn>
        </div>
      </div>
    </v-dialog>
    <!-- //디밍 팝업 -->
  </div>
</template>
<script>
export default {
  name: "light",
  watch: {},
  data: () => ({
    dialogDetail: false,
    dialogDimming: false,
    targetRoom: "",
    activeIndex: 0,
    model: ["냉방", "약풍", "상하 좌우"],
    items: [
      {
        title: "거실",
        subType: "detail",
        value: true,
        details: [
          { title: "조명1", value: true },
          { title: "조명2", value: false },
          { title: "조명3", value: true },
          { title: "조명4", value: true }
        ]
      },
      {
        title: "안방",
        subType: "dimming",
        value: false,
        details: [{ title: "조명1", value: 60 }]
      },
      {
        title: "방1",
        subType: "dimming",
        value: true,
        details: [{ title: "조명1", value: 60 }]
      },
      {
        title: "방2",
        subType: "detail",
        value: false,
        details: [
          { title: "조명1", value: true },
          { title: "조명2", value: false },
          { title: "조명3", value: true },
          { title: "조명4", value: true }
        ]
      },
      {
        title: "방3",
        subType: "detail",
        value: true,
        details: [
          { title: "조명1", value: true },
          { title: "조명2", value: false },
          { title: "조명3", value: true },
          { title: "조명4", value: true }
        ]
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
    changeDetailValue: function(selIndex, selDetailIndex) {
      // console.log(index);
      // console.log(this.$refs["btn-toggle-" + index][0]);
      if (this.items[selIndex].details[selDetailIndex].value == true) {
        this.items[selIndex].details[selDetailIndex].value = false;
      } else {
        this.items[selIndex].details[selDetailIndex].value = true;
      }
    },
    dimMinus: function(activeIndex) {
      this.items[activeIndex].details[0].value--;
    },
    dimPlus: function(activeIndex) {
      this.items[activeIndex].details[0].value++;
    }
  },
  components: {}
};
</script>