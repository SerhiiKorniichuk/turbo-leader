import { SET_EDUCATION_CURRENT_POST, SET_EDUCATION_POST_LIST, WATCH_LOADING } from './educationReducer'


export const setEducationPostsList = (postsList) => {
	return {
		type: SET_EDUCATION_POST_LIST,
		educationPostsList: postsList
	}
}

export const setEducationCurrentPost = (post) => {
	return {
		type: SET_EDUCATION_CURRENT_POST,
		currentEducationPost: post
	}
}

export const watchLoading = (isLoading) => {
	return {
		type: WATCH_LOADING,
		isLoading: isLoading
	}
}