var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var user = require(path.join(__dirname,'.','/src/Models/user.js'));
var TableDataGateway = require(path.join(__dirname,'.','/src/Database/TableDataGateway.js'));
var Mapper = require(path.join(__dirname,'.','/src/Mappers/mapper.js'));
var user = require(path.join(__dirname,'.','/src/Models/user.js'));
var userDto = require(path.join(__dirname,'.','/src/Models/userDto.js'));
var credential = require(path.join(__dirname,'.','/src/Models/credential.js'));
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pg = require("pg");
var http = require('http');
var cors = require('cors');
var app = express();
const port = process.env.PORT || 3011;
const connectionString = 'postgres://localhost:5432/postgres';
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('port',port);
app.use('/', indexRouter);


//app.use('/users', usersRouter);



//Connection

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

	if(port == 3000 || port == 3011){	// Local Host
		var client = new pg.Client({
		user: "postgres",
		password: "karol",
		database: "postgres",
		port: 5432,
		host: "localhost",
		SSL: true
	});
	}
	TableDataGateway(client);
	TableDataGateway.connect(function(err){
	if(err){
		console.log("Not connected to data base"+err);
	}
    });

//Test
    app.post('/credential',function(req, res){
	console.log(JSON.stringify(req.body));
	var email  = req.body.courriel;
	console.log(email);
	textquery = TableDataGateway.credentialQuery(email);
	res.setHeader('Content-Type', 'application/json');
	TableDataGateway.executeQuery(textquery,function(result){
		if(result == -1){
			console.log("Insert Program Failed"+res);
			res.status(500).end("Invalid operation");
			
		}else{
			if (result == 0){	
				res.statusCode = 400;
				res.write(JSON.stringify({"message" : "Usuario no existe"}));
				//res.write('{"message" : "Usuario no existe"}');			
				res.send();
			}
			else{
				res.statusCode = 200;
				res.write('{"message" : "Usuario si existe"}');
			  	res.send();
			}
		}
	});
	/*TableDataGateway.test();
	res.status(200);
	res.setHeader('Content-Type','text/plain');
	res.write('Prueba exitosa');
	console.log('Prueba exitosa');
	res.end();
	 */
	});
// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

//error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
};*/


module.exports = app;
