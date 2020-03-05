const express = require('express')
const https = require('https');
//const http = require('http');
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const _ = require('lodash')
const bundle = fs.readFileSync(path.join(__dirname, './dist/server.js'), 'utf8')
const renderer = require('vue-server-renderer').createBundleRenderer(bundle)
const index = fs.readFileSync(path.join(__dirname, './index.html'), 'utf8')
const cookieParser = require('cookie-parser');

const app = express()

/*******************************************************************************
 * global configuration
 ******************************************************************************/
var config = require('./config/config');

global.config = config;
global.config.dir = {
  base: __dirname, 
  services: __dirname + '/services/',
  utils: __dirname + '/utils/',
}
/*******************************************************************************
 * SERVER Setting
 ******************************************************************************/

const credential = {
  ca: fs.readFileSync('./security/2020/chainca.crt'),        
  cert: fs.readFileSync('./security/2020/STAR.uasis.com.crt'),
  key: fs.readFileSync('./security/2020/STAR.uasis.com.key')
};  
const port = normalizePort(process.env.PORT || '9092');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  limit: '150mb',
  extended: false,
}));
app.use(cookieParser());


app.set('port', port);
const server = https.createServer(credential, app);
//const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


/** ***************************************************************************
 * For Authentication
 * 인증 처리 용
** *************************************************************************** */
var authService = require(global.config.dir.services + 'authService'); 
app.all('/smarthome/v2/*',authService.requireTokenAuthorization)

/*******************************************************************************
 * router
 ******************************************************************************/
const dist = express.static(path.join(__dirname, './dist'))
const message = express.static(path.join(__dirname, './src/public/message'))
const javascript = express.static(path.join(__dirname, './src/public/javascript'))


const style = express.static(path.join(__dirname, './src/assets/style'))
const fonts = express.static(path.join(__dirname, './src/assets/fonts'))
const images = express.static(path.join(__dirname, './src/assets/images'))

const member = require('./router/api/member')
const houseinfo = require('./router/api/houseinfo')
const service = require('./router/api/service')


/*******************************************************************************
 * endPoint
 ******************************************************************************/
app.use('/smarthome/v2/dist', dist)
app.use('/message', message)
app.use('/javascript', javascript)


app.use('/src/assets/style', style)
app.use('/src/assets/fonts', fonts)
app.use('/src/assets/images', images)

app.use('/api/member', member)
app.use('/api/houseinfo', houseinfo)
app.use('/api/service', service)


app.get('/smarthome/v2/*', (req, res, next) => {
  console.log('/smarthome/v2')
  renderer.renderToString({},
    (err, html) => {
      if (err) {
        console.log(err)
        return res.sendStatus(500)
      }      
      res.send(index.replace('<div id=app></div>', html))
    }
  )
})

/*******************************************************************************
 * function
 ******************************************************************************/
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
