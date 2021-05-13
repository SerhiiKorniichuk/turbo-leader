export const WATCH_LOADING = 'WATCH_LOADING'
export const SET_PAYMENT_DATA = 'SET_PAYMENT_DATA'


let initialState = {
	is_loading: false,
	message: ''
}


const paymentReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case SET_PAYMENT_DATA:
			return {
				...state,
				message: actions.message
			}
		case WATCH_LOADING:
			return {
				...state,
				is_loading: actions.is_loading
			}
		default:
			return state
	}
}

export default paymentReducer
