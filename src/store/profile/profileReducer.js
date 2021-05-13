export const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA'
export const WATCH_LOADING = 'WATCH_LOADING'


let initialState = {
	is_loading: false,
	first_name: '',
	last_name: '',
	is_paid: ''
}


const profileReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case SET_USER_PROFILE_DATA:
			return {
				...state,
				...actions.userProfileData

			}
		case WATCH_LOADING:
			return  {
				...state,
				is_loading: actions.is_loading
			}
		default:
			return state
	}
}

export default profileReducer