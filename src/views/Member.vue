<template>
  <div>
    <h1>Member.vue</h1>
    <form action="#">
      <input placeholder="Enter your ID" v-model="id">
      <input placeholder="Enter your password" v-model="pwd">
    <div><h3>회원가입</h3>
      <button v-on:click="on_join">회원 가입</button>
    </div>
    <div></div>
    <div><h3>회원존재 확인</h3>      
      <button v-on:click="on_exist_user">회원 존재 확인</button>
    </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
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
      name: 'member',
    }
  },
  methods: {
    on_join(e){
      console.log("id :: "+this.id+" :: "+this.name);
      
      axios({
        url : "/smarthome/v2/api/"+this.name,
        method : "POST",
        data : {
          "dong"        : "0307",
          "ho"          : "0304",
          "house_key"   : "0D7B60E65065",
          "id"          : this.id ,
          "pwd"         : this.pwd,
          "device_type" : "0",          
          "device_id"   : "0"
        }
      }).then(res => {
        console.log(res.data);
      })
      
    },
    on_exist_user(e){
      console.log("id :: "+this.id);
    }
  },
  components: {
    
  },
  
}
</script>
