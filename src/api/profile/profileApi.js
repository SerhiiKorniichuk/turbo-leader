import axios from 'axios'


export const profileApi = {
	getUserProfileData(username) {
		return (
			axios.get(`user/profile/${username}/`)
		)
	},
	editUserProfileData(userId, newData) {
		return (
			axios.patch(`user/edit/${userId}/`, newData)
		)
	}
}