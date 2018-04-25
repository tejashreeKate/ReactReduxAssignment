export default function userReducer(state={},action){
	switch(action.type){
		case "SAVE_USER_INFO":{
			console.log(action)
			return {
				...state,
				user: action.payload
			}
		}
	}

	return state;
}
