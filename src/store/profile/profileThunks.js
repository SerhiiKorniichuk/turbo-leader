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
				if (error.response.data === 401) {
					dispatch(signOut())
				}
				dispatch(watchLoading(false))
			})
	}
}