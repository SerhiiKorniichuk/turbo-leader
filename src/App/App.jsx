import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Main from './Main/Main'
import Auth from './Main/Auth/Auth'
import './App.scss'
import { useSelector } from 'react-redux'


const App = () => {

	const { is_logged } = useSelector(state => state.auth)

	return (
		<Switch>
			<Route path='/auth'>
				{ !is_logged ? <Auth /> : <Redirect from='auth' to='/' /> }
			</Route>
			<Route path="/">
				{ is_logged ? <Main /> : <Redirect to='/auth/sign-in' /> }
			</Route>
		</Switch>

	)
}

export default App
