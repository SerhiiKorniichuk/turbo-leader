import { setPaymentData, watchLoading } from './paymentActions'
import { paymentApi } from '../../api/payment/paymentApi'
import { signOut } from '../auth/authThunks'
import { seAuthUserPaymentStatus } from '../auth/authActions'


export const sendPayment = (paymentData) => {
	return (dispatch) => {
		dispatch(watchLoading(true))
		paymentApi.sendPayment(paymentData)
			.then(response => {
				dispatch(seAuthUserPaymentStatus(true))
				dispatch(setPaymentData(response.data))
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