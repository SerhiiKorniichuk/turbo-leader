import React, { useEffect } from 'react'
import { Route} from 'react-router-dom'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import { Box, CssBaseline, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import TLMainLogo from './../../../assets/img/logos/TL-main-logo.png'
import { localStorageService } from '../../../helpers/localStorageService'


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

	const referral = new URLSearchParams(window.location.search).get('ref')

	useEffect(() => {
		if (referral) {
			localStorageService.setReferralUser(referral)
		}
	}, [referral])


	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Route exact path='/auth/sign-in'>
						<SignIn />
					</Route>
					<Route exact path='/auth/sign-up'>
						<SignUp referral={referral} />
					</Route>
					<Box mt={5}>
						<Copyright />
					</Box>
				</div>
			</Grid>
		</Grid>
	)
}

export default Auth