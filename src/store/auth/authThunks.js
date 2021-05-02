import { authAPI } from '../../api/auth/authApi'
import { setAuthUserData } from './authActions'
import { localStorageService } from '../../helpers/localStorageService'
import { history } from '../../helpers/history'


export const signUp = (newAccountData) => {
	return (dispatch) => {
		authAPI.signUp(newAccountData)
			.then(response => {
				alert(`Пользователь с ником ${response.data.username} создан!`)
			})
	}
}

export const signIn = (accountData) => {
	return (dispatch) => {
		dispatch(setAuthUserData({ isLoading: true }))
		authAPI.signIn(accountData)
			.then(response => {
				localStorageService.setToken(response.data.token)
				dispatch(setAuthUserData({ isLoading: false }))
				dispatch(setAuthUserData({ isLogged: true }))
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
		localStorageService.clearToken()
		dispatch(setAuthUserData({ isLogged: false }))
	}
}