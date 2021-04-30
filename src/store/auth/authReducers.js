export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


let initialState = {
	username: '',
	email: '',
	firstName: '',
	lastName: '',
	gender: ''
}


const authReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case (SET_AUTH_USER_DATA):
			return {
				...state,
				...actions.userData
			}
		default:
			return state
	}
}

export default authReducer