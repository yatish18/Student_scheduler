/**
 * Created by yatis on 16/08/2017.
 */


var express	=	require('express');
var bodyParser=require('body-parser');
var app	= express();
app.set('view engine', 'ejs');
var http = require('http').Server(app);
app.use(express.static('views'));
var path = __dirname + '/views/';
var router = express.Router();
app.use("/",router);
var routes = require('./app/routes')(app);
var port = process.env.PORT || 1338;

http.listen(port);
console.log("running on 1338");