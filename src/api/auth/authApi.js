import axios from 'axios'


export const authAPI = {
	signUp(newAccountData, referralUser) {
		if (referralUser && typeof referralUser === 'string') {
			return (
				axios.post(`user/register/?ref=${referralUser}`, newAccountData)
			)
		}
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