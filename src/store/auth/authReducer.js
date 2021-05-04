import { localStorageService } from '../../helpers/localStorageService'


export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
export const WATCH_LOADING = 'WATCH_LOADING'

const hasToken = localStorageService.getAccessToken()
const userName = localStorageService.getUserName()

let initialState = {
	isLoading: false,
	isLogged: !!hasToken,
	userName: userName
}


const authReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case (SET_AUTH_USER_DATA):
			return {
				...state,
				isLogged: actions.isLogged
			}
		case (WATCH_LOADING):
			return  {
				...state,
				isLoading: actions.isLoading
			}
		default:
			return state
	}
}

export default authReducer