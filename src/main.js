import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import _ from "lodash";
import moment from "moment";

Vue.prototype._ = _;
Vue.prototype.moment = moment;

Vue.config.productionTip = true;
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
