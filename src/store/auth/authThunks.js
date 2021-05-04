import { authAPI } from '../../api/auth/authApi'
import { setAuthUserData, watchLoading } from './authActions'
import { localStorageService } from '../../helpers/localStorageService'
import { history } from '../../helpers/history'


export const signUp = (newAccountData) => {
	return (dispatch) => {
		dispatch(watchLoading(true))
		authAPI.signUp(newAccountData)
			.then(response => {
				dispatch(watchLoading(false))
				alert(`Пользователь с ником ${response.data.username} создан!`)
			})
	}
}

export const signIn = (accountData) => {
	return (dispatch) => {
		dispatch(watchLoading(true))
		authAPI.signIn(accountData)
			.then(response => {
				localStorageService.setUserName(response.data.username)
				localStorageService.setToken(response.data.token)
				dispatch(setAuthUserData({ isLogged: true, userName: response.data.username }))
				dispatch(watchLoading(false))
				history.push('/')
			})
			.catch(error => {
				if (error.response.status === 400) {
					if (error.response.data.non_field_errors) {
						console.log(error.response.data.non_field_errors)
					}
				}
			})
	}
}


export const signOut = () => {
	return (dispatch) => {
		localStorageService.clearStorage()
		dispatch(setAuthUserData({ isLogged: false }))
	}
}