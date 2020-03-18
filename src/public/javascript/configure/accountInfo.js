import axios from 'axios'

var _router ;

export default {
  name: "accountInfo",
  watch: {},
  data() {
    // item: 1,
    return {
      items: '',
      test_item: ''
    }
  },
  computed: {},
  mounted() {
    _router = this.$router;
    this.$nextTick(function() {
      this.on_read();
  })    
  },
  methods: {
    back_page(){
      _router.replace('/home');
    },
    on_read(){
      var params = {
        "key": "GR_ACCOUNT",
        "key_type": "1"
      };
      axios.post("/api/configure/read", {
        data : params
      }).then((res) => {
        console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{          
          console.log(res.data.data);
          var r_list = res.data.data.list;
          var key_arr = {"ACCOUNT_NAME": "계정 정보", "COMPLEX_NAME":"단지 정보", "DONGHO": "동호수"};

          var list_size = r_list.length; 

          var configure_Arr = new Array();
          
          for(var i=0;i<list_size;i++){
            var configure_info = new Object();
            configure_info.title = key_arr[r_list[i].key];
            configure_info.value = r_list[i].value;

            configure_Arr.push(configure_info);
          }
          console.log(configure_Arr);          
          this.items = configure_Arr;
        }  
      })
    },
    on_logout(){
      if(!confirm('정말 로그아웃 하시겠습니까?')){        
        return;
      }
      axios.post("/api/member/logout", {
      }).then((res) => {
        console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{          
          _router.replace('/login');
        }  
      })
    }
  },
  components: {}
};