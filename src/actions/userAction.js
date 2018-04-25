export function setUserInfo(data){
	return {type:"SAVE_USER_INFO",payload:data}
}

export function validateUserInfo(data){
		if(data.username=="test" && data.password=="test"){
			return true;
		}
	return false;
	
}
