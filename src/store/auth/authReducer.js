import { localStorageService } from '../../helpers/localStorageService'


export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
export const WATCH_LOADING = 'WATCH_LOADING'


let initialState = {
	is_loading: false,
	is_logged: !!localStorageService.getAccessToken(),
	id: '',
	username: '',
	photo: ''
}


const authReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case (SET_AUTH_USER_DATA):
			return {
				...state,
				is_logged: actions.is_logged,
				id: actions.id,
				username: actions.username,
				photo: actions.photo
			}
		case (WATCH_LOADING):
			return  {
				...state,
				is_loading: actions.is_loading
			}
		default:
			return state
	}
}

export default authReducer