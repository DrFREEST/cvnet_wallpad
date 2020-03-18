import axios from 'axios'

var _router ;

export default {
  name: "findPass",
  watch: { },
  data() {    
    return {
      dialog: false,
      id: '',
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
  },
  methods: {
    back_page(){
      _router.replace('/login');
    },
    on_find_pwd(){
      var id = this.id;
      var dong = this.dong;
      var ho = this.ho;
      var house_key = this.house_key;

      //validate      
      if(_utils.empty(id)){
        alert("아이디를 입력해 주세요");
        this.$refs.id.focus()
        return false;
      }
      if(_utils.empty(dong)){
        alert("동을 입력해 주세요");
        this.$refs.id.focus()
        return false;
      }
      if(_utils.empty(ho)){
        alert("호를 입력해 주세요");
        this.$refs.id.focus()
        return false;
      }
      if(_utils.empty(house_key)){
        alert("인증키를 입력해 주세요");
        this.$refs.house_key.focus()
        return false;
      }

      axios.post("/api/member/find_pwd", {
        data : {          
          "id"          : id,
          "dong"        : dong,
          "ho"          : ho,
          "house_key"   : house_key
        }
      }).then((res) => {
        //console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{
          this.openPop(res.data.data.temp_pwd)
        }
      })
    },
    openPop(temp_pwd){
      //console.log(temp_pwd);
      this.temp_pwd = temp_pwd;
      this.dialog = true;
    },
    closePop(){
      this.dialog = false;
      _router.replace({name: 'login', params: {items: this.temp_pwd}})  //이건 임시비밀번호를 가지고 로그인 화면으로 갈경우..      
    },
    e_check_validation(){
      var id = _utils.empty(this.id);
      var dong = _utils.empty(this.dong);
      var ho = _utils.empty(this.ho);
      var house_key = _utils.empty(this.house_key);

      if(!id && !dong && !ho && !house_key){
        this.is_ok = true;
      }else{
        this.is_ok = false;
      }
    }
  },
  components: {}
};