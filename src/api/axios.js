import * as axios from 'axios'


const axiosBase = axios.create({
	baseURL: 'https://api-turbo-leader.herokuapp.com/',
})

export default axiosBase