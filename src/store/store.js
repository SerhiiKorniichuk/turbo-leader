import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './auth/auth-reducers'


const reducers = combineReducers({
	auth: authReducer,
})


let store = createStore(reducers, applyMiddleware(thunk))

window.store = store
window.state = store.getState()

export default store