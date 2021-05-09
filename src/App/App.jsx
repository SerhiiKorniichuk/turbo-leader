import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Main from './Main/Main'
import Auth from './Main/Auth/Auth'
import './App.scss'
import { useSelector } from 'react-redux'


const App = () => {

	const { is_logged } = useSelector(state => state.auth)

	return (
		<>
			<Route path="/">
				{ is_logged ? <Main /> : <Redirect to='/auth/sign-in' /> }
			</Route>
			<Route path='/auth'>
				{ !is_logged ? <Auth /> : <Redirect to='/' /> }
			</Route>
		</>

	)
}

export default App
