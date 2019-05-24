/*
* Class User for program
*/
function UserDto(credential_email,credential_password, user_id,first_name,last_name,role_user,active_user){
	this.credential_email = credential_email;
	this.credential_password = credential_email;
	this.user_id = user_id;
	this.first_name = first_name;
	this.last_name = last_name;
	this.role_user = role_user;
	this.active_user = active_user;
};

module.exports = UserDto;