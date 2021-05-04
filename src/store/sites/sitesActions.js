import { SET_SITES_DATA, WATCH_LOADING } from './sitesReducer'


export const setSitesList = (sitesList) => {
	return {
		type: SET_SITES_DATA,
		mySitesList: sitesList
	}
}

export const watchLoading = (isLoading) => {
	return {
		type: WATCH_LOADING,
		isLoading: isLoading
	}
}