import axios from 'axios'
var _router ;

export default {
  name: "certificationFail",
  watch: {},
  computed: {},
  mounted() {
    _router = this.$router;
  },
  methods: {
    on_remove_device_auth(){
      axios.post("/api/member/remove_device_auth", {
        data : {          
          "device_id" : "0"
        }
      }).then((res) => {
        console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{
          _router.replace({name: 'joinStep1'});
        }
      })
    }
  },
  components: {}
};