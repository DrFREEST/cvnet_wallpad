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
          <h2>관리비</h2>
        </div>
        <div class="common-panel-content has-dashboard">
          <div class="sel-date">
            <div class="sel-group">
              <v-btn class="btn-prev" depressed color="transparent">
                <v-img src="/src/assets/images/icon_prev.png"></v-img>
              </v-btn>
              <div class="title">
                <strong>{{this.currentMonth.ko}}</strong>
                <span>{{this.currentMonth.en}}</span>
              </div>
              <v-btn class="btn-next" depressed color="transparent">
                <v-img src="/src/assets/images/icon_next.png"></v-img>
              </v-btn>
            </div>
          </div>
          <div class="dashboard">
            <v-container class="cost-list">
              <v-row color="transparent">
                <v-col v-for="(item,index) in costList" :key="index">
                  <v-card flat>
                    <v-card-title>
                      <v-img :src="item.iconSrc"></v-img>
                      <h3>{{item.title}}</h3>
                    </v-card-title>
                    <v-card-text>
                      <strong>{{item.value}}</strong>원
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            <div class="cost-total" v-if="this.hasTotal">
              <h3 class="total-title">2019년 9월 관리비 합계</h3>
              <div class="total-text">
                <div class="value">
                  <strong>328,157</strong>원
                </div>
              </div>
            </div>
          </div>
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
  name: "adnimistratorExpenses",
  watch: {},
  data: () => ({
    hasTotal: true, //전체 합계 유/무
    detailText: "",
    activeItem: "",
    currentMonth: { ko: "3월", en: "Mar" },
    monthList: [
      { ko: "1월", en: "Jan" },
      { ko: "2월", en: "Feb" },
      { ko: "3월", en: "Mar" },
      { ko: "4월", en: "Apr" },
      { ko: "5월", en: "May" },
      { ko: "6월", en: "Jun" },
      { ko: "7월", en: "Jul" },
      { ko: "8월", en: "Aug" },
      { ko: "9월", en: "Sep" },
      { ko: "10월", en: "Oct" },
      { ko: "11월", en: "Nov" },
      { ko: "12월", en: "Dec" }
    ],
    costList: [
      {
        title: "세대 관리비",
        value: "108,000",
        iconSrc: "/src/assets/images/ic_maintenance_each.svg"
      },
      {
        title: "전기 요금",
        value: "108,000",
        iconSrc: "/src/assets/images/ic_maintenance_elec.svg"
      },
      {
        title: "일반 관리비",
        value: "108,000",
        iconSrc: "/src/assets/images/ic_maintenance_nor.svg"
      },
      {
        title: "수도 요금",
        value: "108,000",
        iconSrc: "/src/assets/images/ic_maintenance_water.svg"
      },
      {
        title: "기타",
        value: "108,000",
        iconSrc: "/src/assets/images/ic_maintenance_etc.svg"
      },
      {
        title: "난방 요금",
        value: "108,000",
        iconSrc: "/src/assets/images/ic_maintenance_heat.svg"
      }
    ]
  }),
  computed: {},
  mounted() {},
  methods: {
    viewDetail: function(index) {
      var contentText = this.items[index]["content"];
      console.log(contentText);
      this.detailText = contentText;
    }
  },
  components: {}
};
</script>