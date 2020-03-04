var express = require('express');
var router = express.Router();
var axios = require('axios');
var url = "http://118.223.28.75:9090/smarthome/v2/api/member";

/************************************************************************* START
 * APIs
 ******************************************************************************/
 
/**
 *  @METHOD post
 *  @URL /api/member/join
 */
router.post('/join', function (req, res, next) {
    console.log("router join req :: "+req.body.data.id +" :: ");

    var result = {
        code: null,
        message : null
    };
    axios.post(url, {
        method : "join",
        data : {
            "dong"        : req.body.data.dong,
            "ho"          : req.body.data.ho,
            "house_key"   : req.body.data.house_key,
            "id"          : req.body.data.id ,
            "pwd"         : req.body.data.pwd,
            "device_type" : req.body.data.device_type,          
            "device_id"   : req.body.data.device_id
          }
    }).then(function(response){
        //console.log(response);
        result.code = response.data.result.status;
        result.message = response.data.result.message;
        result.data = response.data.data;
        
        res.json(result);
    })
        
});

/**
 *  @METHOD post
 *  @URL /api/member/exist_user
 */
router.post('/exist_user', function (req, res, next) {

    var result = {
        code: null,
        message : null
    };
    axios.post(url, {
        method : "exist_user",
        data : {
            "dong"        : req.body.data.dong,
            "ho"          : req.body.data.ho,            
            "id"          : req.body.data.id 
          }
    }).then(function(response){
        console.log(response);
        result.code = response.data.result.status;
        result.message = response.data.result.message;
        result.data = response.data.data;
        
        res.json(result);
    })
});


/**
 *  @METHOD post
 *  @URL /api/member/find_user
 */
router.post('/find_user', function (req, res, next) {

    var result = {
        code: null,
        message : null
    };
    axios.post(url, {
        method : "find_user",
        data : {
            "dong"        : req.body.data.dong,
            "ho"          : req.body.data.ho,            
            "house_key"   : req.body.data.house_key 
          }
    }).then(function(response){
        console.log(response);
        result.code = response.data.result.status;
        result.message = response.data.result.message;
        result.data = response.data.data;
        
        res.json(result);
    })
});


/**
 *  @METHOD post
 *  @URL /api/member/find_pwd
 */
router.post('/find_pwd', function (req, res, next) {

    var result = {
        code: null,
        message : null
    };
    axios.post(url, {
        method : "find_pwd",
        data : {
            "dong"        : req.body.data.dong,
            "ho"          : req.body.data.ho,
            "house_key"   : req.body.data.house_key,
            "id"          : req.body.data.id  
          }
    }).then(function(response){
        console.log(response);
        result.code = response.data.result.status;
        result.message = response.data.result.message;
        result.data = response.data.data;
        
        res.json(result);
    })
});


/**
 *  @METHOD post
 *  @URL /api/member/exist_device_auth
 */
router.post('/exist_device_auth', function (req, res, next) {

    var result = {
        code: null,
        message : null
    };
    axios.post(url, {
        method : "exist_device_auth",
        data : {
            "device_id"   : req.body.data.device_id
          }
    }).then(function(response){
        console.log(response);
        result.code = response.data.result.status;
        result.message = response.data.result.message;
        result.data = response.data.data;
        
        res.json(result);
    })
});


/**
 *  @METHOD post
 *  @URL /api/member/remove_device_auth
 */
router.post('/remove_device_auth', function (req, res, next) {

    var result = {
        code: null,
        message : null
    };
    axios.post(url, {
        method : "remove_device_auth",
        data : {
            "device_id"   : req.body.data.device_id
          }
    }).then(function(response){
        console.log(response);
        result.code = response.data.result.status;
        result.message = response.data.result.message;
        result.data = response.data.data;
        
        res.json(result);
    })
});

/**
 *  @METHOD post
 *  @URL /api/member/login
 */
router.post('/login', function (req, res, next) {
console.log(" pwd : "+req.body.data.pwd);
    var result = {
        code: null,
        message : null
    };

    axios.post(url, {
        method : "login",
        token : req.body.token,
        data : {            
            "id"          : req.body.data.id ,
            "pwd"         : req.body.data.pwd,
            "device_type" : req.body.data.device_type,          
            "device_id"   : req.body.data.device_id,
            "push_token"  : req.body.data.push_token
          }
    }).then(function(response){
        console.log(response);
        result.code = response.data.result.status;
        result.message = response.data.result.message;
        result.data = response.data.data;
        
        res.json(result);
    }).catch(function(){
        result.code = response.data.result.status;
        result.message = response.data.result.message;
        result.data = response.data.data;

        res.json(result);
    })
});


/**
 *  @METHOD post
 *  @URL /api/member/logout
 */
router.post('/logout', function (req, res, next) {
    
    var result = {
        code: null,
        message : null
    };

    axios.post(url, {
        method : "logout",
        token : req.body.token            
    }).then(function(response){
        console.log(response);
        result.code = response.data.result.status;
        result.message = response.data.result.message;
        result.data = response.data.data;
        
        res.json(result);
    }).catch(function(){
        result.code = response.data.result.status;
        result.message = response.data.result.message;
        result.data = response.data.data;

        res.json(result);
    })
});


/**
 *  @METHOD post
 *  @URL /api/member/login
 */
router.post('/change_pwd', function (req, res, next) {
    
    var result = {
        code: null,
        message : null
    };

    axios.post(url, {
        method : "change_pwd",
        token : req.body.token,
        data : {
            "new_pwd"     : req.body.data.new_pwd,
            "device_type" : req.body.data.device_type,          
            "device_id"   : req.body.data.device_id
            }
    }).then(function(response){
        console.log(response);
        result.code = response.data.result.status;
        result.message = response.data.result.message;
        result.data = response.data.data;
        
        res.json(result);
    }).catch(function(){
        result.code = response.data.result.status;
        result.message = response.data.result.message;
        result.data = response.data.data;

        res.json(result);
    })
});






/**
 *  @METHOD post
 *  @URL /api/member/login
 */
router.post('/change_pwd', function (req, res, next) {

    var result = {
        code: null,
        message : null
    };
    axios.post(url, {
        method : "login",
        token : req.body.token,
        data : {            
            "id"          : req.body.data.id ,
            "pwd"         : req.body.data.pwd,
            "device_type" : req.body.data.device_type,          
            "device_id"   : req.body.data.device_id,
            "push_token"  : req.body.data.push_token
          }
    }).then(function(response){
        console.log(response);
        result.code = response.data.result.status;
        result.message = response.data.result.message;
        result.data = response.data.data;
        
        res.json(result);
    })
});

module.exports = router;