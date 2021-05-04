import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './auth/authReducer'
import sitesReducers from './sites/sitesReducer'


const reducers = combineReducers({
	auth: authReducer,
	sites: sitesReducers
})


let store = createStore(reducers, applyMiddleware(thunk))

window.store = store
window.state = store.getState()

export default store