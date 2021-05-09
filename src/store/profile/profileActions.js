import { SET_USER_PROFILE_DATA, WATCH_LOADING } from './profileReducer'


export const setUserProfileData = (userProfileData) => {
	return {
		type: SET_USER_PROFILE_DATA,
		userProfileData: userProfileData
	}
}

export const watchLoading = (is_loading) => {
	return {
		type: WATCH_LOADING,
		is_loading: is_loading
	}
}