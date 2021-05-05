import { educationAPI } from '../../api/education/educationApi'
import { setEducationCurrentPost, setEducationPostsList, watchLoading } from './educationActions'


export const getEducationPostsList = () => {
	return (dispatch) => {
		dispatch(watchLoading(true))
		educationAPI.getAllPosts()
			.then((response) => {
				dispatch(setEducationPostsList(response.data))
				dispatch(watchLoading(false))
			})
	}
}

export const getEducationCurrentPost = (postId) => {
	return (dispatch) => {
		dispatch(watchLoading(true))
		educationAPI.getCurrentPost(postId)
			.then((response) => {
				dispatch(setEducationCurrentPost(response.data))
				dispatch(watchLoading(false))
			})
	}
}