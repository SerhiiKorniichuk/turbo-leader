import React from 'react'
import { Route } from 'react-router-dom'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import { Box, CssBaseline, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import TLMainLogo from './../../../assets/img/logos/TL-main-logo.png'


const Copyright = () => {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			Copyright © Turbo Leader {new Date().getFullYear()}.
		</Typography>
	)
}


const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh'
	},
	image: {
		backgroundImage: `url(${TLMainLogo})`,
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: '80%, 80%',
		backgroundPosition: 'center'
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	}
}))


const Auth = (props) => {

	const classes = useStyles()

	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Route path='/auth/sign-in' component={SignIn} />
					<Route path='/auth/sign-up' component={SignUp} />
					<Box mt={5}>
						<Copyright />
					</Box>
				</div>
			</Grid>
		</Grid>
	)
}

export default Auth