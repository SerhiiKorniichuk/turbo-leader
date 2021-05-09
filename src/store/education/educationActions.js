import { SET_EDUCATION_CURRENT_POST, SET_EDUCATION_POST_LIST, WATCH_LOADING } from './educationReducer'


export const setEducationPostsList = (posts_list) => {
	return {
		type: SET_EDUCATION_POST_LIST,
		education_posts_list: posts_list
	}
}

export const setEducationCurrentPost = (post) => {
	return {
		type: SET_EDUCATION_CURRENT_POST,
		current_education_post: post
	}
}

export const watchLoading = (is_loading) => {
	return {
		type: WATCH_LOADING,
		is_loading: is_loading
	}
}