import { SET_SITES_DATA, WATCH_LOADING } from './sitesReducer'


export const setSitesList = (sites_list) => {
	return {
		type: SET_SITES_DATA,
		my_sites_list: sites_list
	}
}

export const watchLoading = (is_loading) => {
	return {
		type: WATCH_LOADING,
		is_loading: is_loading
	}
}