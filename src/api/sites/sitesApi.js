import axios from 'axios'


export const sitesAPI = {
	getSitesList() {
		return (
			axios.get(`my_site/`)
		)
	}
}