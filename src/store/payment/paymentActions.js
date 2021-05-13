import { SET_PAYMENT_DATA, WATCH_LOADING } from './paymentReducer'


export const setPaymentData = ({ message }) => {
	return {
		type: SET_PAYMENT_DATA,
		message: message
	}
}

export const watchLoading = (is_loading) => {
	return {
		type: WATCH_LOADING,
		is_loading: is_loading
	}
}