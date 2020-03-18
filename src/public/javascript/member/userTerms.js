export default {
  name: "userTerms",
  watch: {},  
  computed: {},
  mounted() {
  },
  methods: {
    back_page(){
      this.$parent.$parent.$parent.dialog = false;
      this.$parent.$parent.$parent.agree_ok = false;
      this.$parent.$parent.$parent.check_join_ok();
    },
    go_join_step2(){
      this.$parent.$parent.$parent.dialog = false;
      this.$parent.$parent.$parent.agree_ok = true;
      this.$parent.$parent.$parent.check_join_ok();
    }
  },
  components: {}
};