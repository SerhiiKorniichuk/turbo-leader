import { setAuthUserData } from './authActions'
import { authAPI } from '../../api/auth/authApi'


export const userRegistration = (authData) => {
	return (dispatch) => {
		authAPI.userRegistration(authData).then(response => {
			dispatch(setAuthUserData(response.data))
		}).catch(error => console.error('Error:', error))
	}
}