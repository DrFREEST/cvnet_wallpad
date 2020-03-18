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
          <h2>환기</h2>
        </div>
        <div class="common-panel-content">
          <!-- 환기제어 -->
          <!-- 설정 메뉴 1개일 경우 -->
          <div class="one-settings" v-if="items.length==1">
            <v-img class="one-setting-icon" src="/src/assets/images/icon_vent_big.png"></v-img>
            <div class="control-btns">
              <v-btn-toggle v-model="toggleActive">
                <v-btn v-for="(detailItem, detailIndex) in items[0].details" depressed key="detailIndex">{{detailItem.title}}</v-btn>
              </v-btn-toggle>
            </div>
          </div>
          <!-- //설정 메뉴 1개일 경우 -->
          <!-- 설정 메뉴 2개 이상일 경우 -->
          <!-- 설정 메뉴 2개 이상일 경우 && 5개 이하일 경우-->
          <v-list class="multi-settings" color="transparent" v-else-if="items.length>1 && items.length<=5">
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
                <v-img src="/src/assets/images/icon_vent.png" class="img-on"></v-img>
              </v-btn>
              <v-btn block depressed class="btn-detail" @click="openDetail(index,item.title)">
                상세설정
                <v-icon class="icon-detail"></v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
          <!-- //설정 메뉴 2개 이상일 경우 && 5개 이하일 경우-->
          <!-- 설정 메뉴 2개 이상일 경우 && 5개 초과일 경우-->
          <div class="multi-settings" v-else>
            <swiper :options="swiperOption" class="control-slide">
              <div class="swiper-pagination"  slot="pagination"></div>
              <swiper-slide v-for="(item,index) in items" :key="index">
                <v-list-item-title>{{item.title}}</v-list-item-title>
                <v-btn
                  depressed
                  outlined
                  color="transparent"
                  class="btn-toggle"
                  :ref="'btn-toggle-'+index"
                  @click="changeValue(index)"
                >
                  <v-img src="/src/assets/images/icon_vent.png" class="img-on"></v-img>
                </v-btn>
                <v-btn block depressed class="btn-detail" @click="openDetail(index,item.title)">
                  상세설정
                  <v-icon class="icon-detail"></v-icon>
                </v-btn>
              </swiper-slide>
              
            </swiper>
          </div>
          <!-- //설정 메뉴 2개 이상일 경우 && 5개 초과일 경우-->
          <!-- //설정 메뉴 2개 이상일 경우 -->
          <p class="control-note">※ 가스밸브는 안전상 잠금 제어 기능만 사용가능합니다.</p>
          <!-- //환기제어 -->
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
                  v-for="(popDetailItem,popDetailIndex) in items[activeIndex].details"
                  :key="popDetailIndex"
                >
                  <v-list-item-title>{{popDetailItem.title}}</v-list-item-title>
                  <v-btn
                    depressed
                    outlined
                    color="transparent"
                    class="btn-toggle"
                    :ref="'btn-toggle-'+activeIndex"
                    @click="changeDetailValue(activeIndex,popDetailIndex)"
                  >
                    <v-img
                      contain
                      src="/src/assets/images/icon_light_on_round.png"
                      class="img-on"
                      v-if="popDetailItem.value==true"
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
  </div>
</template>
<script>
export default {
  name: "ventilation",
  watch: {},
  data: () => ({
    toggleActive: 0,
    activeIndex: 0,
    swiperOption: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      setWrapperSize: true,
      // centeredSlides: true,
      pagination: {
        el: ".swiper-pagination"
      }
    },
    items: [
      {
        title: "환기1",
        value: 3,
        details: [
          { title: "강풍", value: true },
          { title: "중풍", value: false },
          { title: "약풍", value: true },
          { title: "끄기", value: true }
        ]
      },
      // {
      //   title: "환기2",
      //   value: 2,
      //   details: [
      //     { title: "강풍", value: true },
      //     { title: "중풍", value: false },
      //     { title: "약풍", value: true },
      //     { title: "끄기", value: true }
      //   ]
      // },
      // {
      //   title: "환기3",
      //   value: 1,
      //   details: [
      //     { title: "강풍", value: true },
      //     { title: "중풍", value: false },
      //     { title: "약풍", value: true },
      //     { title: "끄기", value: true }
      //   ]
      // },
      // {
      //   title: "환기4",
      //   value: 1,
      //   details: [
      //     { title: "강풍", value: true },
      //     { title: "중풍", value: false },
      //     { title: "약풍", value: true },
      //     { title: "끄기", value: true }
      //   ]
      // },
      // {
      //   title: "환기5",
      //   value: 1,
      //   details: [
      //     { title: "강풍", value: true },
      //     { title: "중풍", value: false },
      //     { title: "약풍", value: true },
      //     { title: "끄기", value: true }
      //   ]
      // },
      // {
      //   title: "환기6",
      //   value: 1,
      //   details: [
      //     { title: "강풍", value: true },
      //     { title: "중풍", value: false },
      //     { title: "약풍", value: true },
      //     { title: "끄기", value: true }
      //   ]
      // },
      // {
      //   title: "환기7",
      //   value: 1,
      //   details: [
      //     { title: "강풍", value: true },
      //     { title: "중풍", value: false },
      //     { title: "약풍", value: true },
      //     { title: "끄기", value: true }
      //   ]
      // },
      // {
      //   title: "환기8",
      //   value: 1,
      //   details: [
      //     { title: "강풍", value: true },
      //     { title: "중풍", value: false },
      //     { title: "약풍", value: true },
      //     { title: "끄기", value: true }
      //   ]
      // }
    ]
  }),
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {},
  methods: {
    openDetail: function(selectIndex, popTitle) {
      this.dialogDetail = true;
      this.targetRoom = popTitle;
      this.activeIndex = selectIndex;
    },
  },
  components: {}
};
</script>