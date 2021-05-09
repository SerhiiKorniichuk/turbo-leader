import { SET_AUTH_USER_DATA, WATCH_LOADING } from './authReducer'


export const setAuthUserData = ({ is_logged, username }) => {
	return {
		type: SET_AUTH_USER_DATA,
		is_logged: is_logged,
		username: username
	}
}

export const watchLoading = (is_loading) => {
	return {
		type: WATCH_LOADING,
		is_loading: is_loading
	}
}