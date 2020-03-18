import axios from 'axios'

var _router ;
var _r_arr ;
var _agree_ok;
export default {
  name: "joinStep2",
  watch: { },
  data() {
    _agree_ok = this.$route.params.agree_ok
    if(_utils.empty(_agree_ok)){
      _agree_ok = false
    }
    _r_arr = this.$route.params.items
    return {
      dialog: false,
      dong: _r_arr.dong,
      ho: _r_arr.ho,
      house_key: _r_arr.house_key,
      id: '',
      pwd: '',
      check_pwd: '',
      validation_id_ok: false,
      validation_pwd_ok: false,
      id_ok: false,
      agree_ok: _agree_ok,
      join_ok: false,
      check_pwd_ok: false,
      text_id: '영어 혹은 숫자로 6자리 이상',
      text_pwd: '영어, 숫자, 특수문자를 혼합하여 8자리 이상',
      text_check_pwd: '상단의 비밀번호 재입력'
    };
  },
  computed: {},
  mounted() {
    _router = this.$router;
    this.check_join_ok()
  },
  methods: {
    back_page(){
      _router.replace('/login');
    },
    check_join_ok(){
      if(this.id_ok && this.agree_ok && this.validation_id_ok && this.check_pwd_ok && this.validation_pwd_ok){
        this.join_ok = true;
      }else{
        this.join_ok = false;
      }
    },
    on_exist_user(){
      var id = this.id;
      var dong = this.dong;
      var ho = this.ho;

      //validate
      if(_utils.empty(id)){
        alert("아이디를 입력해 주세요");
        this.$refs.id.focus()
        return false;
      }

      if(!this.validation_id_ok){
        alert("유효한 아이디를 입력해 주세요");
        return false;
      }

      var params = {"dong": dong, "ho": ho, "id": id};

      axios.post("/api/member/exist_user", {
        data : params
      }).then((res) => {
        //console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{
          if(res.data.data.exist == "1"){ //사용 불가능
            this.id_ok = false;
            this.text_id = "영어 혹은 숫자로 6자리 이상"
            alert("이미 등록된 아이디 입니다.");            
          }else{  //사용가능
            this.id_ok = true;
            this.text_id = "사용가능한 아이디 입니다."
            this.$refs.pwd.focus();
            this.check_join_ok();
          }
        }
      })
    },
    e_check_pwd(e){
      var pwd = this.pwd;
      if(e.target.value.length > 0){
        if(pwd == e.target.value){
          this.text_check_pwd = '비밀번호가 동일 합니다.';
          this.check_pwd_ok = true;
        }else{
          this.text_check_pwd = '비밀번호가 다릅니다.';
          this.check_pwd_ok = false;
        }
      }else{
        this.text_check_pwd = '상단의 비밀번호 재입력';
        this.check_pwd_ok = false;
      }
      this.check_join_ok();
    },
    on_user_terms(){
      this.dialog = true;
    },
    on_join(){
      var dong = this.dong;
      var ho = this.ho;
      var house_key = this.house_key;
      var id = this.id;
      var pwd = this.pwd;      

      //validate
      if(_utils.empty(id)){
        alert("아이디를 입력해 주세요");
        this.$refs.id.focus()
        return false;
      }
      if(_utils.empty(pwd)){
        alert("비밀번호를 입력해 주세요");
        this.$refs.pwd.focus()
        return false;
      }
      if(_utils.empty(dong)){
        alert("인증정보가 없어 로그인 페이지로 이동 됩니다.");
        this.back_page()
      }
      if(!this.join_ok){
        if(!this.id_ok){
          alert("아이디 중복 확인을 해주세요");
          return false;
        }
        if(!this.agree_ok){
          alert("서비스 이용약관에 동의 해주세요");
          return false;
        }
      }

      var params = {
        "dong": dong, 
        "ho": ho, 
        "house_key": house_key,
        "id": id,
        "pwd": pwd,
        "device_type" : "0",    //추후 method 제공
        "device_id"   : "0",    //추후 method 제공
      };

      axios.post("/api/member/join", {
        data : params
      }).then((res) => {
        //console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{          
          _router.replace('/member/certificationSuccess');
        }
      })
    },
    e_check_validation_id(e){
      var input_id = e.target.value;
      this.id_ok = false;
      this.text_id = "영어 혹은 숫자로 6자리 이상"
      
      var check = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,100}$/.test(input_id);   //영문,숫자

      if(!check){
        this.text_id = "영어 혹은 숫자로 6자리 이상(불가능)";
        this.validation_id_ok = false;
      }else{
        this.text_id = "영어 혹은 숫자로 6자리 이상(가능)";
        this.validation_id_ok = true;
      }
      this.check_join_ok();
    },
    e_check_validation_pwd(e){
      var pwd = e.target.value;
      var check = /^(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,100}$/.test(pwd);  //특수문자, 숫자
      if(!check){
        this.text_pwd = "영어, 숫자, 특수문자를 혼합하여 8자리 이상(사용 불가능}";
        this.validation_pwd_ok = false;
      }else{
        this.text_pwd = "영어, 숫자, 특수문자를 혼합하여 8자리 이상(사용 가능}";
        this.validation_pwd_ok = true;
      }
      this.check_join_ok();
    }       
  },
  components: {}
};