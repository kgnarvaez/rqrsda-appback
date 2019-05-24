			
/*
* User
*/
var path = require('path');
var userDto = require(path.join(__dirname,'userDto'));
function user(userDto){
	this.user_id = UserDto.user_id;
	this.first_name= UserDto.first_name;
	this.last_name = UserDto.last_name;
	this.role_user = UserDto.role_user;
	this.active_user = UserDto.active_user;
};
user.prototype.getFields = function(){
	return "user_id,first_name,last_name,role_user,active_user";
}
user.prototype.toInsertValues= function(){
	return unescape("'"+this.first_name+"' , '"+this.last_name +"' , '"+this.role_user+"' , '"+this.active_user+"'");
}
module.exports = user;