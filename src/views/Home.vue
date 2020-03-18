<template>
  <div class="main-page">
    <div class="main-page-top">
      <div class="main-page-top-actions">
        <v-btn depressed class="btn-room-status">
          <!-- 외출모드 아이콘 -->
          <v-img
            height="100%"
            contain
            src="/src/assets/images/ic_mode_goout_white.svg"
            class="icon-goout"
          ></v-img>
          <!-- //외출모드 아이콘 -->
          <!-- 재실모드 아이콘 -->
          <v-img
            height="100%"
            contain
            src="/src/assets/images/ic_mode_home_white.svg"
            class="icon-home"
          ></v-img>
          <!-- //재실모드 아이콘 -->
          <!-- 취침모드 아이콘 -->
          <v-img
            height="100%"
            contain
            src="/src/assets/images/ic_mode_sleep.svg"
            class="icon-sleep"
          ></v-img>
          <!-- //취침모드 아이콘 -->
          재실모드
        </v-btn>
      </div>
      <div class="main-page-top-logo">
        <h1>
          <v-img contain height="100%" src="/src/assets/images/logo-raemian-white.png"></v-img>
        </h1>
      </div>
    </div>
    <div class="main-page-content">
      <!-- 날씨정보 -->
      <v-container class="weather-section">
        <div class="today">
          <div class="today-temp">
            <h3>최고/최저 온도</h3>
            <div class="high">
              27
              <em class="unit">˚</em>
            </div>
            <div class="low">
              16
              <em class="unit">˚</em>
            </div>
          </div>
          <div class="today-dust">
            <h3>미세먼지</h3>
            <div class="status">좋음</div>
            <div class="value">
              27
              <em class="unit">㎍/㎥</em>
            </div>
          </div>
        </div>
        <div class="weather-icon">
          <!-- <v-img src="/src/assets/images/ic_weather_alittlecloudy.svg"></v-img> -->
          <!-- <v-img src="/src/assets/images/ic_weather_alotcloudy.svg"></v-img> -->
          <!-- <v-img src="/src/assets/images/ic_weather_cloudy.svg"></v-img> -->
          <!-- <v-img src="/src/assets/images/ic_weather_rainny.svg"></v-img> -->
          <!-- <v-img src="/src/assets/images/ic_weather_rainsnow.svg"></v-img> -->
          <!-- <v-img src="/src/assets/images/ic_weather_snowy.svg"></v-img> -->
          <v-img src="/src/assets/images/ic_weather_sunny.svg"></v-img>
        </div>
        <div class="now">
          <div class="now-temp">
            <div class="value">
              27
              <em class="unit">˚</em>
            </div>
            <span class="text">맑음</span>
          </div>
        </div>
      </v-container>
      <!-- //날씨정보 -->
      <!-- 메뉴 슬라이드 -->
      <v-container class="main-menu-section">
        <div class="main-menu-slide-wrapper">
          <swiper :options="swiperOption">
            <swiper-slide class="menu-group">
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_gas_opened.png"></v-img>
                <span>가스 차단기</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_curtain.png"></v-img>
                <span>커튼</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_heat_off.png"></v-img>
                <span>난방</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_all_on.png"></v-img>
                <span>일괄소등 스위치</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_plug.png"></v-img>
                <span>대기전력</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_administrative_expenses.png"></v-img>
                <span>관리비</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_light_on.png"></v-img>
                <span>조명</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_vent.png"></v-img>
                <span>환기</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_visitor.png"></v-img>
                <span>방문자 확인</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_air_conditioner.png"></v-img>
                <span>에어컨</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_notice.png"></v-img>
                <span>공지사항</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_call.png"></v-img>
                <span>통화</span>
              </v-btn>
            </swiper-slide>
            <swiper-slide class="menu-group">
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_elevator.png"></v-img>
                <span>엘리베이터</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_access_record.png"></v-img>
                <span>출입기록</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_car_charging.png"></v-img>
                <span>전기차 충전</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_remote_meter_reading.png"></v-img>
                <span>원격검침</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_parking_location.png"></v-img>
                <span>주차위치</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_arrival_notice.png"></v-img>
                <span>입차통보</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_emergency.png"></v-img>
                <span>비상리스트</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_cctv.png"></v-img>
                <span>CCVT</span>
              </v-btn>
              <v-btn color="transparent" depressed to="/">
                <v-img contain src="/src/assets/images/icon_delivery.png"></v-img>
                <span>택배</span>
              </v-btn>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </v-container>
      <!-- //메뉴 슬라이드 -->
      <!-- 설정버튼 -->
      <v-btn class="btn-setting" color="transparent" depressed title="환경설정" to="/configure">
        <v-img
          contain
          height="100%"
          src="/src/assets/images/ic_setting_white.svg"
          class="icon-setting"
        ></v-img>
      </v-btn>
      <!-- //설정버튼 -->
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

export default {
  name: "home",
  watch: {},
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {},
  // All slick methods can be used too, example here
  methods: {},
  components: {}
};
</script>
