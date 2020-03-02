import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//const resourceHost = 'https://118.223.28.75:8090'
const resourceHost = '127.0.0.1:9090'
axios.defaults.baseURL = resourceHost

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {},
  state: {},
  mutations: {},
  getters: {},
  actions: {}
})

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  console.warn('Error status', error.response)
  // return Promise.reject(error)
  if (error.response) {
    if(error.response.status == 404){

    }else{
      return parseError(error.response.data)
    }
  } else {
    return Promise.reject('서버와 통신상태가 원활하지 않습니다.')
  }
  // Do something with response error
  return Promise.reject('서버와 통신상태가 원활하지 않습니다.')
})
export default store

