import React from 'react'
import { Route } from 'react-router-dom'
import Main from './Main/Main'
import SignIn from './SignIn/SignIn'
import { connect } from 'react-redux'


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
