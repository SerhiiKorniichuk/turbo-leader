import { SET_AUTH_USER_DATA } from './authReducers'


export const setAuthUserData = (userData) => {
	return {
		type: SET_AUTH_USER_DATA,
		userData: userData
	}
}