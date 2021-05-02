import React from 'react'
import { Route } from 'react-router-dom'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import { Box, CssBaseline, Grid, Link as MaterialLink, makeStyles, Paper, Typography } from '@material-ui/core'


const Copyright = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<MaterialLink color="inherit" href="https://material-ui.com/">
				Turbo Leader
			</MaterialLink>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}


const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh'
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
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