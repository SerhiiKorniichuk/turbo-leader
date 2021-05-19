import axios from 'axios'
import { localStorageService } from '../helpers/localStorageService'
import { API_URL } from '../config'
import { history } from '../helpers/history'


axios.defaults.baseURL = API_URL

axios.interceptors.request.use(function (config) {
	// Do something before request is sent
	const token = localStorageService.getAccessToken()

	if (token) config.headers['Authorization'] = 'Token ' + token

	console.log(config)

	return config
}, function (error) {
	// Do something with request error
	console.error('Error:', error)
	console.log(error.response)

	return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
	// Any status code that lie within the range of 2xx cause this function to trigger
	// Do something with response data
	console.log(response)

	return response
}, function (error) {
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	console.error('Error:', error)
	console.log(error.response)

	if (error.response.status === 401) {
		localStorageService.clearStorage()
		history.push('/auth/sign-in')
	}

	return Promise.reject(error)
})