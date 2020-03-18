import axios from 'axios'

var _router ;
var _temp_pwd = '';

// Custom Script
export default {
  name: "login",  
  watch: {},
  computed: {},
  mounted() {
    _router = this.$router;    
    this.check_token()

    _temp_pwd = this.$route.params.items;    
  },

  data() {
    return {
      id: 'test',
      pwd: _temp_pwd,
      select: null,
      locationItems: ["Item 1", "Item 2", "Item 3", "Item 4"],
      areaItems: ["Item 1", "Item 2", "Item 3", "Item 4"],
      hello: "world"
    };
  },
  methods: {
    check_token(){
      
      axios.post("/api/member/login", {        
        data : {
          "device_type" : "0",    //추후 method 제공
          "device_id"   : "0",    //추후 method 제공
          "push_token"  : "0"     //추후 method 제공
        }
      }).then(function(res){
        //console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{
          if(res.data.code == 100){ //신규 로그인 사용자의 경우!!

          }else{
            _router.replace('/home');
          }          
        }          
      })
      
    },
    on_login(e){      
      
      var id = this.id;
      var pwd = this.pwd;

      //validate
      if(_utils.empty(id)){
        alert("아이디를 입력해 주세요");
        return false;
      }
      if(_utils.empty(pwd)){
        alert("패스워드를 입력해 주세요");
        return false;
      }

      axios.post("/api/member/login", {        
        data : {            
          "id"          : id,
          "pwd"         : pwd,
          "device_type" : "0",    //추후 method 제공
          "device_id"   : "0",    //추후 method 제공
          "push_token"  : "0"     //추후 method 제공
        }
      }).then(function(res){
        //console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{
          _router.replace('/home');
        }          
      })
    },
    on_exist_device_auth(){
      //to="/member/JoinStep1"
      axios.post("/api/member/exist_device_auth", {
        data : {          
          "device_id" : "0"
        }
      }).then((res) => {
        console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{
          var exist = res.data.data.exist;
          if(exist == "0"){
            _router.push({name: 'joinStep1'});
          }else{
            _router.push({name: 'certificationFail'});
          }
        }
      })
    }    
  },
  components: {}
};

