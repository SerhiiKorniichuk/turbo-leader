import axios from 'axios'


export const profileApi = {
	getUserProfileData(username) {
		return (
			axios.get(`user/profile/${username}`)
		)
	}
}