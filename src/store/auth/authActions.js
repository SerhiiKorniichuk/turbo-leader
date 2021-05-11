import { SET_AUTH_USER_DATA, WATCH_LOADING } from './authReducer'


export const setAuthUserData = ({ id, username, photo }) => {
	return {
		type: SET_AUTH_USER_DATA,
		is_logged: !!username,
		id: id,
		username: username,
		photo: photo
	}
}

export const watchLoading = (is_loading) => {
	return {
		type: WATCH_LOADING,
		is_loading: is_loading
	}
}