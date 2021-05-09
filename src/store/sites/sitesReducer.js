export const SET_SITES_DATA = 'SET_SITES_DATA'
export const WATCH_LOADING = 'WATCH_LOADING'


let initialState = {
	is_loading: false,
	my_sites_list: []
}


const sitesReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case (SET_SITES_DATA):
			return {
				...state,
				my_sites_list: actions.my_sites_list
			}
		case (WATCH_LOADING):
			return {
				...state,
				is_loading: actions.is_loading
			}
		default:
			return state
	}
}

export default sitesReducer