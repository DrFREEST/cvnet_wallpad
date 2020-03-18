import axios from 'axios'

var _router ;

export default {
  name: "changePass",
  watch: {},
  data() {   
    return {      
      pwd: '',
      check_pwd: '',
      pwd_ok: false,
      check_pwd_ok: false,
      text_pwd: '영어, 숫자, 특수문자를 혼합하여 8자리 이상',
      text_check_pwd: '상단의 비밀번호 재입력',
      check_ok: false
    };
  },
  computed: {},
  mounted() {
    _router = this.$router;
  },
  methods: {
    back_page(){
      _router.replace('/home');
    },
    e_check_validation_pwd(e){
      var pwd = e.target.value;
      var check = /^(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,100}$/.test(pwd);  //특수문자, 숫자
      if(!check){
        this.text_pwd = "영어, 숫자, 특수문자를 혼합하여 8자리 이상(사용 불가능}";
        this.pwd_ok = false;
      }else{
        this.text_pwd = "영어, 숫자, 특수문자를 혼합하여 8자리 이상(사용 가능}";
        this.pwd_ok = true;
      }
      this.e_check_ok();
    },
    e_check_pwd(e){
      var pwd = this.pwd;
      
      if(e.target.value.length > 0){        
        if(pwd == e.target.value){
          this.text_check_pwd = '상단의 비밀번호 재입력(비밀번호가 동일)';
          this.check_pwd_ok = true;
        }else{
          this.text_check_pwd = '상단의 비밀번호 재입력(비밀번호가 다름)';
          this.check_pwd_ok = false;
        }
      }else{
        this.text_check_pwd = '상단의 비밀번호 재입력';
        this.check_pwd_ok = false;
      }
      this.e_check_ok();
    },
    e_check_ok(){
      if(this.pwd_ok && this.check_pwd_ok){
        this.check_ok = true;
      }else{
        this.check_ok = false;
      }
    },
    on_change_pwd(){

      if(!this.check_ok){
        alert("패스워드를 확인해 주세요(임시)");
        return false;
      }

      var params = {
        "new_pwd": this.pwd,
        "device_id": "0", 
        "device_type": "0"
      };

      axios.post("/api/member/change_pwd", {
        data : params
      }).then((res) => {
        console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{          
          alert("패스워드가 정상적으로 변경되었습니다.");
          _router.replace('/login');
        }  
      })
    }
  },
  components: {}
};