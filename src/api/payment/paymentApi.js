import axios from 'axios'


export const paymentApi = {
	sendPayment(paymentData) {
		console.log(paymentData)
		return (
			axios.post(`user/pay/`, paymentData)
		)
	}
}