import { localStorageService } from '../../helpers/localStorageService'


export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

const hasToken = localStorageService.getAccessToken()

let initialState = {
	isLogged: !!hasToken,
	isLoading: false
}


const authReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case (SET_AUTH_USER_DATA):
			return {
				...state,
				isLogged: actions.isLogged,
				isLoading: actions.isLoading
			}
		default:
			return state
	}
}

export default authReducer