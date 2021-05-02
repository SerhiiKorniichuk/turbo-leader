import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Main from './Main/Main'
import Auth from './Main/Auth/Auth'
import './App.scss'
import { useSelector } from 'react-redux'


const App = () => {

	const { isLogged } = useSelector(state => state.auth)

	return (
		<>
			<Route path="/">
				{ isLogged ? <Main /> : <Redirect to='/auth/sign-in' /> }
			</Route>
			<Route path='/auth'>
				{ !isLogged ? <Auth /> : <Redirect to='/' /> }
			</Route>
		</>

	)
}

export default App
