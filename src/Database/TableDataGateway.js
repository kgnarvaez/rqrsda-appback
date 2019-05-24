/*
// Database connection and SQL querys (Table Data Gateway)
*/
var path = require('path');
var PGConnection = require('pg');



function TableDataGateway(connection){
	conn = connection;
};
TableDataGateway.connect = function(){
	conn.connect(function(err){
		if(err)throw err;
		console.log("Connected to database");
	});
};
TableDataGateway.closeConnection = function(fn){
	conn.end(function(err){
		if(err){
		 console.log(err);
		 fn(-1);
		}
		console.log("Database closed");
	});
};
TableDataGateway.test = function(){
	console.log("Test Over TableDataGateway");
};

TableDataGateway.credentialQuery = function(email){
	return queryText = "SELECT count(credential_id) FROM credential WHERE email = '"+email+"';";
	
	
};

TableDataGateway.executeQuery = function(sqlQuery,fn){
	conn.query(sqlQuery,function(err,res){
		if(err){
			console.log(err);
			fn(-1);
		}else{	
			var ResultArray = res.rows[0].count;
			fn(ResultArray);
		}
	});
};

module.exports = TableDataGateway;