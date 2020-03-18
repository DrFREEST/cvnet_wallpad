import axios from 'axios'

var _router ;

export default {
  name: "setPush",
  watch: {},
  data: () => ({
    // item: 1,
    items: ''
  }),
  computed: {},
  mounted() {
    _router = this.$router;
    this.on_read();
  },
  methods: {
    back_page(){
      _router.replace('/home');
    },
    on_read(){
      var params = {
        "key": "GR_PUSH",
        "key_type": "1"
      };
      axios.post("/api/configure/read", {
        data : params
      }).then((res) => {
        console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{
          var r_list = res.data.data.list;
          var key_arr = {
            "USE_PUSH_ALARM_LTE_CALL": "3G/LTE시 통화호출", 
            "USE_PUSH_ALARM_CAR_IN":"입차 통보", 
            "USE_PUSH_ALARM_NOTICE": "신규 공지/택배",
            "USE_PUSH_ALARM_CONTROL": "제어 실행",
            "USE_PUSH_ALARM_EMG": "비상 실행",
            "USE_PUSH_WEBRTC_MODE": "통화/알림모드"
          };
          var value_arr = {"0": false, "1": true}

          var list_size = r_list.length; 

          var configure_Arr = new Array();
          
          for(var i=0;i<list_size;i++){
            var configure_info = new Object();
            configure_info.title = key_arr[r_list[i].key];
            configure_info.modelName = r_list[i].key;
            configure_info.value = value_arr[r_list[i].value];

            configure_Arr.push(configure_info);
          }          
          this.items = configure_Arr;
        }  
      })
    },
    on_write(key, value, index){
      
      var i_value = value ? "0" : "1";
      console.log("key : "+key+"i_value : "+i_value);
      var params = {
        "key": key,
        "value": i_value
      };
      axios.post("/api/configure/write", {
        data : params
      }).then((res) => {
        console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{
          //뭔가 값이 없네;;; 이걸..어쩔가..다시 조회?
          this.on_read();
        }  
      })

    }
  },
  components: {}
};