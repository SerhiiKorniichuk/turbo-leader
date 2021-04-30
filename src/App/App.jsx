import React from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Main from './Main/Main'
import SignIn from './Main/Auth/Auth'
import './App.scss'


const App = () => {

	const { username } = useSelector(state => state.auth)

	return (
		<Route path="/">
			{username
				? <Main />
				: <SignIn to="/login" />
			}
		</Route>
	)
}

export default App
