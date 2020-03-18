var _router ;
var _r_arr ;

export default {
  name: "findIdResult",
  watch: { },
  data() {    
    return {
      items: ''
    };
  },
  computed: {},
  mounted() {
    _router = this.$router;
    _r_arr = this.$route.params.items;
    this.items = _r_arr;
  },
  methods: {
    back_page(){
      _router.replace('/login');
    }
  },
  components: {}
};