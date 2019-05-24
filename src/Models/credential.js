/*
* Credential
*/
var path = require('path');
var userDto = require(path.join(__dirname,'userDto'));
function credential(userDto){
	this.credential_email = UserDto.credential_email;
	this.credential_password= UserDto.credential_password;
};
credential.prototype.getFields = function(){
	return "credential_email";
};
credential.prototype.toInsertValues= function(){
	return unescape("'"+this.credential_email+"' , '"+this.credential_password +"'");
};
module.exports = credential;