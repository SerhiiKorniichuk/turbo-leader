import { localStorageService } from '../../helpers/localStorageService'


export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
export const SET_AUTH_USER_PAYMENT_STATUS = 'SET_AUTH_USER_PAYMENT_STATUS'
export const WATCH_LOADING = 'WATCH_LOADING'


let initialState = {
	is_loading: false,
	is_logged: !!localStorageService.getAccessToken(),
	id: '',
	username: '',
	photo: '',
	is_paid: false,
	is_superuser: false
}


const authReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				is_logged: actions.is_logged,
				id: actions.id,
				username: actions.username,
				photo: actions.photo,
				is_paid: actions.is_paid,
				is_superuser: actions.is_superuser
			}
		case SET_AUTH_USER_PAYMENT_STATUS:
			return {
				...state,
				is_paid: actions.is_paid
			}
		case WATCH_LOADING:
			return  {
				...state,
				is_loading: actions.is_loading
			}
		default:
			return state
	}
}

export default authReducer