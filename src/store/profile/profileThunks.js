import { setUserProfileData, watchLoading } from './profileActions'
import { profileApi } from '../../api/profile/profileApi'
import { signOut } from '../auth/authThunks'


export const getUserProfileData = (username) => {
	return (dispatch) => {
		dispatch(watchLoading(true))
		profileApi.getUserProfileData(username)
			.then(response => {
				dispatch(setUserProfileData(response.data))
				dispatch(watchLoading(false))
			})
			.catch(error => {
				if (error.response.status === 401) {
					dispatch(signOut())
				}
				dispatch(watchLoading(false))
			})
	}
}

export const editUserProfileData = (userId, newData) => {
	return (dispatch) => {
		dispatch(watchLoading(true))
		profileApi.editUserProfileData(userId, newData)
			.then(response => {
				dispatch(setUserProfileData(response.data))
				dispatch(watchLoading(false))
			})
			.catch(error => {
				if (error.response.status === 401) {
					dispatch(signOut())
				}
				dispatch(watchLoading(false))
			})
	}
}