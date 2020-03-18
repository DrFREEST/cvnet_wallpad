var _router ;

export default {
  name: "settingList",
  watch: {},
  data: () => ({
    // item: 1,
    items: [
      { title: "계정정보", routingPage: "/configure/AccountInfo" },
      { title: "앱정보", routingPage: "/configure/AppInfo" },
      { title: "푸쉬 알람 설정", routingPage: "/configure/SetPush" },
      { title: "언어 선택", routingPage: "/configure/SelLanguage" },
      { title: "귀가모드 설정", routingPage: "/configure/HomeComming" },
      { title: "통화모드 설정", routingPage: "/configure/CallMode" }
    ]
  }),
  computed: {},
  mounted() {
    _router = this.$router;
  },
  methods: {
    back_page(){
      _router.replace('/home');
    }
  },
  components: {}
};