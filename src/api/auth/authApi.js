import axios from 'axios'


export const authAPI = {
	signUp(newAccountData) {
		return (
			axios.post(`user/register/`, newAccountData)
		)
	},
	signIn(accountData) {
		return (
			axios.post(`user/login/`, accountData)
		)
	},
	getCurrentUser() {
		return (
			axios.post(`user/detail/`)
		)
	}
}