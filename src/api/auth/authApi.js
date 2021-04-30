import axiosBase from '../axios'


export const authAPI = {
	userRegistration(authData) {
		return (
			axiosBase.post(`user/register/`, authData)
		)
	}
}