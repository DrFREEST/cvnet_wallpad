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
            <v-list-item v-for="(item,index) in items">
              <v-list-item-title>{{item.title}}</v-list-item-title>
              <v-btn
                depressed
                flat
                outlined
                color="transparent"
                class="btn-toggle"
                :ref="'btn-toggle-'+index"
                @click="changeValue(index)"
              >
                <v-img src="/src/assets/images/icon_heat_on.png" class="img-on" v-if="item.value"></v-img>
                <v-img src="/src/assets/images/icon_heat_off.png" class="img-off" v-else></v-img>
              </v-btn>
              <v-btn block depressed flat class="btn-detail" @click.stop="dialog=true">
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
    <v-dialog
      v-model="dialog"
      content-class="popup-detail"
      color="transparent"
      max-width="517px"
      fullscreen
    >
      <div class="common-panel">
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
              <v-list-item v-for="(item,index) in items">
                <v-list-item-title>{{item.title}}</v-list-item-title>
                <v-btn
                  depressed
                  flat
                  outlined
                  color="transparent"
                  class="btn-toggle"
                  :ref="'btn-toggle-'+index"
                  @click="changeValue(index)"
                >
                  <v-img src="/src/assets/images/icon_heat_on.png" class="img-on" v-if="item.value"></v-img>
                  <v-img src="/src/assets/images/icon_heat_off.png" class="img-off" v-else></v-img>
                </v-btn>
                <v-btn block depressed flat class="btn-detail" @click.stop="dialog=true">
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
    setDetail: function(index) {
      console.log(index);
    },
    changeValue: function(index) {
      // console.log(index);
      // console.log(this.$refs["btn-toggle-" + index][0]);
      if (this.items[index].value == true) {
        this.items[index].value = false;
      } else {
        this.items[index].value = true;
      }
    }
  },
  components: {}
};
</script>