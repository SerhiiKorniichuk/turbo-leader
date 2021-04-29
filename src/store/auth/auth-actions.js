import { SET_AUTH_USER_DATA } from './auth-reducers'


export const setAuthUserData = (isLogged) => {
	return {
		type: SET_AUTH_USER_DATA,
		isLogged: isLogged
	}
}