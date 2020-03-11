import axios from 'axios'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.$cookies.config('10d')

export default {
    name: 'member',
    watch: {
    },
    computed: {
    },
    mounted () {
      
    },
    data () {
      return {
        id: '',
        pwd: '',
        dong: '',
        ho: '',
        house_key: '',
        device_type: '',
        device_id: '',
        push_token: ''
      }
    },
    methods: {
      on_join(e){
        //console.log("id :: "+jprops.router.member);
        
        axios.post("/api/member/join", {
          data : {
            "dong"        : "0307",
            "ho"          : "0304",
            "house_key"   : "0D7B60E65065",
            "id"          : this.id ,
            "pwd"         : this.pwd,
            "device_type" : "0",          
            "device_id"   : "0"
          }
        }).then(function(res){
          console.log(res.data);
        })
        
      },
      on_unregister(e){
        axios.post("/api/member/unregister", {
          data : {
            "dong"        : "0307",
            "ho"          : "0304",          
            "id"          : this.id
          }
        }).then(function(res){
          console.log(res.data);
        })
      },
      on_exist_user(e){
        axios.post("/api/member/exist_user", {
          data : {
            "dong"        : "0307",
            "ho"          : "0304",          
            "id"          : this.id
          }
        }).then(function(res){
          console.log(res.data);
        })
      },
      on_find_user(e){
        axios.post("/api/member/find_user", {
          data : {
            "dong"        : "0307",
            "ho"          : "0304",          
            "house_key"   : "0D7B60E65065"
          }
        }).then(function(res){
          console.log(res.data);
        })
      },
      on_find_pwd(e){
        axios.post("/api/member/find_pwd", {
          data : {
            "dong"        : "0307",
            "ho"          : "0304",
            "house_key"   : "0D7B60E65065",          
            "id"          : this.id
          }
        }).then(function(res){
          console.log(res.data);
        })
      },
      on_exist_device_auth(e){
        axios.post("/api/member/exist_device_auth", {
          data : {
            "device_id"   : "0"
          }
        }).then(function(res){
          console.log(res.data);
        })
      },
      on_remove_device_auth(e){
        axios.post("/api/member/remove_device_auth", {
          data : {
            "device_id"   : "0"
          }
        }).then(function(res){
          console.log(res.data);
        })
      },
      on_login(e){
        var token = $cookies.get("token");   
        console.log("token : "+token);

        var id = this.id;
        var pwd = this.pwd;
        if(!_utils.empty(token)){
            id = "";
            pwd = "";
        }


        axios.post("/api/member/login", {
          token : token,
          data : {            
            "id"          : id,
            "pwd"         : pwd,
            "device_type" : "0",          
            "device_id"   : "0",
            "push_token"  : "0"
          }
        }).then(function(res){
            var r_token = res.data.data.token;
            console.log("r_token : "+r_token);
            if(!_utils.empty(r_token)){
                $cookies.set('token', r_token);
            }
        })
      },
      on_logout(e){
        var token = $cookies.get("token");
        console.log("out token : "+token);
        axios.post("/api/member/logout", {
          token : token,
        }).then(function(res){
            $cookies.remove("token")
        })
      },
      on_change_pwd(e){
        var token = $cookies.get("token");
        console.log("change_pwd token : "+token);
        axios.post("/api/member/change_pwd", {
          token : token,
          data : {
            "new_pwd"     : this.pwd,
            "device_type" : "0",          
            "device_id"   : "0"
          }
        }).then(function(res){
          console.log(res.data);
        })
      }
    },
    components: {
      
    },
    
  }