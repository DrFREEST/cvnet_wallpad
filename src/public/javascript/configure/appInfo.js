var _router ;

export default {
  name: "appInfo",
  watch: {},
  data: () => ({
    // item: 1,
    items: [
      { title: "이용약관", routingPage: "/member/UseTerms" },
      { title: "개인정보 취급방침", routingPage: "/member/UseTerms" }
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