export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


let initialState = {
	isLogged: false
}


const authReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case (SET_AUTH_USER_DATA):
			return {
				...state,
				isLogged: actions.isLogged
			}
		default:
			return state

	}
}

export default authReducer