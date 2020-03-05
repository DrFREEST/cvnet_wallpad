
import Vue from 'vue'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import router from './router'
import store from './store'
import _ from "lodash";
import moment from "moment";

// Style Load
import './assets/style/nanumsquare.css'
import './assets/style/reset.min.css'
import './assets/style/cvnet.scss'

import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.prototype._ = _;
Vue.prototype.moment = moment;

Vue.config.productionTip = true;
new Vue({
  vuetify,
  router,
  store,
  el: '#app',
  render: h => h(App),
})
