var utils = require(global.config.dir.utils + 'reqUtils');

/*****************************************************************************************
 * 
 *  토큰 확인 / ID / PWD 확인
 * 
 *****************************************************************************************/

//WEB ADMIN CONSOLE AUTH
exports.requireTokenAuthorization = function (req, res, next) {

  var token = req.signedCookies.token;
  
  if(!utils.isEmpty(token)){
    next()
  }else{    
    if(req.path.indexOf('login') > 0){
      next()
    }else{
      res.redirect('/smarthome/v2/login/');
    }    
  }
};

