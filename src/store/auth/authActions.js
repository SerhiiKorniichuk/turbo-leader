import { SET_AUTH_USER_DATA, WATCH_LOADING } from './authReducer'


export const setAuthUserData = ({ isLogged, username }) => {
	return {
		type: SET_AUTH_USER_DATA,
		isLogged: isLogged,
		userName: username
	}
}

export const watchLoading = (isLoading) => {
	return {
		type: WATCH_LOADING,
		isLoading: isLoading
	}
}