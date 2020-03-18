var axios = require('axios');

module.exports.apiCall = function (url, params, callback) {
    //node express 의 axios 컨트롤 부분
    axios.post(url, params).then(function(response){callback(response)})    
};


// 요청 인터셉터 추가
axios.interceptors.request.use(
    function(config){
        // 요청 보내기전 수행
        //console.log("요청 인터셉터");
        return config;
    },
    function(error){
        // 오류 요청을 보내기전 수행할 일
        //console.log("오류 요청 인터셉터");
        return Promise.reject(error);
    }
)

// 응답 인터셉터 추가
axios.interceptors.response.use(
    function (response) {
      // 응답 데이터를 가공
      //console.log("응답 인터셉터");
      return response;
    },
    function (error) {
      // 오류 응답을 처리
      //console.log("오류 요청 인터셉터");
      return Promise.reject(error);
    }
);
