var _router ;

export default {
  name: "findIdPass",
  watch: {},
  computed: {},
  mounted() {
    _router = this.$router;
  },
  methods: {
    back_page(){
      _router.replace('/login');
    }
  },
  components: {}
};