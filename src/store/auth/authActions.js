import { SET_AUTH_USER_DATA } from './authReducers'


export const setAuthUserData = (authData) => {
	return {
		type: SET_AUTH_USER_DATA,
		...authData
	}
}