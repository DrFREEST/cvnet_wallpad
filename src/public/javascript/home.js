import "swiper/dist/css/swiper.css";
import axios from 'axios'

var _router ;

export default {
  name: "home",
  watch: {},
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      items_0: {},
      items_1: {}
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    _router = this.$router;
    this.on_device_check();
    //this.on_weather();    //아직 API 개발중
  },
  // All slick methods can be used too, example here
  methods: {
    on_device_check(){

      axios.post("/api/houseInfo/device_check", {
      }).then(function(res){
        console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{          
          console.log(res.data.data);
        }          
      })
    },
    on_weather(){
      axios.post("/api/houseService/weather", {
      }).then(function(res){
        console.log(res);
        if(res.data.code > 200){
          alert(res.data.message);
        }else{
           
        }          
      })
    },
    f_make_device_list(data){
      console.log(data.length);
    },
    go_page(page_name){
      _router.push({name: page_name});
    }
  },
  components: {}
};
