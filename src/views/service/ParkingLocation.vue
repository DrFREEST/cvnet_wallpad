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
          <h2>주차 위치</h2>
          <ul class="common-panel-title--board-type">
            <li class="light">가족 위치</li>
            <li class="dark">차량 위치</li>
          </ul>
        </div>
        <div class="common-panel-content">
          <div class="board-wrap" :class="{hasDetail:detailViewMode}">
            <div class="board-list">
              <v-list-item-group v-model="activeItem">
                <v-list-item
                  v-for="(item, index) in items"
                  @click.stop="viewDetail(index)"
                  :key="index"
                >
                  <v-list-item-title>
                    <span class="location">{{item.location}}</span>
                    <span class="title">{{item.title}}</span>
                    <span class="date">{{item.date}}</span>
                    <span class="date">{{item.time}}</span>
                  </v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </div>
            <div class="board-detail" v-if="detailViewMode==true" v-html="this.detailText"></div>
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
  name: "courierInquiry",
  watch: {},
  data: () => ({
    detailViewMode: true, //상세보기 유/무
    detailText: "",
    activeItem: "",
    items: [
      {
        location: "115동-2-5라인-지하1층",
        title: "ACA182F9",
        date: "2020-03-20",
        time: "11:24",
        content: "<div class='no-data'>주차장 이미지가 제공되지 않습니다.</div>"
      },
      {
        location: "115동-2-5라인-지하1층",
        title: "ACA182F9",
        date: "2020-03-20",
        time: "11:24",
        content:
          "<div class='parking-wrap'><img class='parking-map' src='https://dummyimage.com/1141x645/fcfcfc/aaaaaa.png?text=Parking%20Img'/><span class='pin' style='top:50px;left:350px;'><img src='/src/assets/images/ic_parking_loaction.svg'/></span></div>"
      },
      {
        location: "115동-2-5라인-지하1층",
        title: "ACA182F9",
        date: "2020-03-20",
        time: "11:24",
        content:
          "<div class='parking-wrap'><img class='parking-map' src='https://dummyimage.com/1141x645/fcfcfc/aaaaaa.png?text=Parking%20Img'/><span class='pin' style='top:70px;left:336px;'><img src='/src/assets/images/ic_parking_loaction.svg'/></span></div>"
      },
      {
        location: "115동-2-5라인-지하1층",
        title: "ACA182F9",
        date: "2020-03-20",
        time: "11:24",
        content: "<div class='no-data'>주차장 이미지가 제공되지 않습니다.</div>"
      },
      {
        location: "115동-2-5라인-지하1층",
        title: "ACA182F9",
        date: "2020-03-20",
        time: "11:24",
        content: "<div class='no-data'>주차장 이미지가 제공되지 않습니다.</div>"
      },
      {
        location: "115동-2-5라인-지하1층",
        title: "ACA182F9",
        date: "2020-03-20",
        time: "11:24",
        content: "<div class='no-data'>주차장 이미지가 제공되지 않습니다.</div>"
      },
      {
        location: "115동-2-5라인-지하1층",
        title: "ACA182F9",
        date: "2020-03-20",
        time: "11:24",
        content: "<div class='no-data'>주차장 이미지가 제공되지 않습니다.</div>"
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