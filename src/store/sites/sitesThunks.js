import { sitesAPI } from '../../api/sites/sitesApi'
import { setSitesList, watchLoading } from './sitesActions'


export const getSitesList = () => {
	return (dispatch) => {
		dispatch(watchLoading(true))
		sitesAPI.getSitesList()
			.then(response => {
				dispatch(setSitesList(response.data))
				dispatch(watchLoading(false))
			})
	}
}