/*
// Database connection and SQL querys (Table Data Gateway)
*/
var path = require('path');
var PGConnection = require('pg');

function newConnection(port){
	if(port == 3011){	// Local Host
		var connectionString = "postgres://postgres:postgres@localhost:5432/postgres";
		return connection;
	}else{	 // Server with env config file //that is not done
		var connectionString = "postgres://postgres:postgres@localhost:5432/postgres";
		return connection;
	}
	
}

function TableDataGateway(port){
	conn = newConnection(port);
};

TableDataGateway.connect = function(port,fn){
	conn = newConnection(port);
	conn.connect(function(err){
		if(err){
			console.log(err);
			fn(-1);
		}else{
			console.log("Connected to database");
		}
	});
};


function TableDataGateway(port){
	conn = newConnection(port);
};
TableDataGateway.closeConnection = function(){
	conn.end(function(err){
		if(err) throw err;
		console.log("Database closed");
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
}

TableDataGateway.userQuery = function(user){
	console.log(organization.toInsertValues());
	return "insert into users("+user.getFields()+") values ("+user.toInsertValues()+");";
}

TableDataGateway.credentialQuery = function(credential){
	console.log(organization.toInsertValues());
	return "insert into users("+credential.getFields()+") values ("+credential.toInsertValues()+");";
}
TableDataGateway.credentialQueryVerification = function(email){
	console.log(credential verification);
	return "select count (credential_id)from credential where email_credential in ("+email+");";
}

TableDataGateway.executeQuery = function(sqlQuery,fn){
	console.log(sqlQuery);
	conn.query(sqlQuery,function(err,res){
		if(err){
			console.log(err);
			fn(-1);
		}else{
			fn(0);
		}
	});
}
module.exports=TableDataGateway;