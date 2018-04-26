const userInfo = {
	uname:"tejashree",
	pwd:"test"
}
/** set user data in the store*/
export function setUserInfo(data){
	return {type:"SAVE_USER_INFO",payload:data}
}

/** validate user data with the static user info and return true if details match*/
export function validateUserInfo(data){
		if(data.username==userInfo.uname && data.password==userInfo.pwd){
			return true;
		}
	return false;
}
