export const SET_SITES_DATA = 'SET_SITES_DATA'
export const WATCH_LOADING = 'WATCH_LOADING'


let initialState = {
	isLoading: false,
	mySitesList: []
}


const sitesReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case (SET_SITES_DATA):
			return {
				...state,
				mySitesList: actions.mySitesList
			}
		case (WATCH_LOADING):
			return {
				...state,
				isLoading: actions.isLoading
			}
		default:
			return state
	}
}

export default sitesReducer