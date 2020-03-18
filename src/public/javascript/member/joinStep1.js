import axios from 'axios'

var _router ;

export default {
  name: "joinStep1",
  watch: { },
  data() {    
    return {  
      dong: '0307',
      ho: '0304',
      house_key: '0D7B60E65065',
      temp_pwd: '',
      is_ok: false
    };
  },
  computed: {},
  mounted() {
    _router = this.$router;
    this.e_check_validation()   //임시
  },
  methods: {
    back_page(){
      _router.replace('/login');
    },
    on_verify_housekey(){
      var dong = this.dong;
      var ho = this.ho;
      var house_key = this.house_key;

      //validate
      if(_utils.empty(dong)){
        alert("동을 입력해 주세요");
        this.$refs.dong.focus()
        return false;
      }
      if(_utils.empty(ho)){
        alert("호를 입력해 주세요");
        this.$refs.ho.focus()
        return false;
      }
      if(_utils.empty(house_key)){
        alert("인증키를 입력해 주세요");
        this.$refs.house_key.focus()
        return false;
      }

      var params = {"dong": dong, "ho": ho, "house_key": house_key};

      axios.post("/api/member/verify_housekey", {
        data : params
      }).then((res) => {
        //console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{
          if(res.data.data.verify == "1"){  //확인            
            _router.push({name : 'joinStep2', params:{items: params}});
          }else{  //실패
            alert("인증 정보를 확인해 주세요.");
            return
          }
        }
      })
    },
    e_check_validation(){
      var dong = _utils.empty(this.dong);
      var ho = _utils.empty(this.ho);
      var house_key = _utils.empty(this.house_key);

      if(!dong && !ho && !house_key){
        this.is_ok = true;
      }else{
        this.is_ok = false;
      }
    }
  },
  components: {}
};