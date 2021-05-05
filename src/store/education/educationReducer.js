export const SET_EDUCATION_POST_LIST = 'SET_POST_LIST'
export const SET_EDUCATION_CURRENT_POST = 'SET_CURRENT_POST'
export const WATCH_LOADING = 'WATCH_LOADING'


let initialState = {
	isLoading: false,
	educationPostsList: [],
	currentEducationPost: {}
}


const educationReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case (SET_EDUCATION_POST_LIST):
			return {
				...state,
				educationPostsList: actions.educationPostsList
			}
		case (SET_EDUCATION_CURRENT_POST):
			return {
				...state,
				currentEducationPost: actions.currentEducationPost
			}
		case (WATCH_LOADING):
			return  {
				...state,
				isLoading: actions.isLoading
			}
		default:
			return state
	}
}

export default educationReducer