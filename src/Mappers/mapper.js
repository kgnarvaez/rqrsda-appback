/*
/ Mapper class: controls the data flo ans the DataTableGateway
*/
var path = require('path');
function Mapper(given_TableDataGateway,given_port){
	TableDataGateway = given_TableDataGateway;
	sqlQuery = "";
	port = given_port;
}
function connectDatabase(){
	return new Promise((resolve,reject)=>{
		TableDataGateway.connect(port,function(result){
			if(result == -1){
				console.log("Error connecting database");
				reject("Not Connected to database");
			}else{
				console.log("Database Connected");
				resolve(result);
			}
		});
	});
}
function closeConnection(){
	return new Promise((resolve,reject)=>{
		TableDataGateway.closeConnection(function(result){
			if(result == -1){
				reject("Not close the database");
			}else{
				resolve();
			}
		});
	});
	
Mapper.verificationCredential = function(email){
	return new Promise((resolve,reject)=>{
		sqlQuery += TableDataGateway.credentialQueryVerification(email);
		resolve(sqlQuery);
	});
}
}
module.exports=Mapper;