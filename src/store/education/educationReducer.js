export const SET_EDUCATION_POST_LIST = 'SET_POST_LIST'
export const SET_EDUCATION_CURRENT_POST = 'SET_CURRENT_POST'
export const WATCH_LOADING = 'WATCH_LOADING'


let initialState = {
	is_loading: false,
	education_posts_list: [],
	current_education_post: {}
}


const educationReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case SET_EDUCATION_POST_LIST:
			return {
				...state,
				education_posts_list: actions.education_posts_list
			}
		case SET_EDUCATION_CURRENT_POST:
			return {
				...state,
				current_education_post: actions.current_education_post
			}
		case WATCH_LOADING:
			return  {
				...state,
				is_loading: actions.is_loading
			}
		default:
			return state
	}
}

export default educationReducer