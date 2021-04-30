import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Main from './Main/Main'
import SignIn from './Main/Auth/Auth'
import './App.scss'

const App = (props) => {
	return (
		<Route path="/">
			{props.isLogged
				? <Main />
				: <SignIn to="/login" />
			}
		</Route>
	)
}

const mapStateToProps = ({ auth }) => {
	return {
		isLogged: auth.isLogged
	}
}

export default connect(mapStateToProps, {})(App)
