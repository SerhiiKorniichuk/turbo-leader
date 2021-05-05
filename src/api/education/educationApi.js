import axios from 'axios'


export const educationAPI = {
	getAllPosts() {
		return (
			axios.get(`education/`)
		)
	},
	getCurrentPost(postId) {
		return (
			axios.get(`education/${postId}`)
		)
	}
}