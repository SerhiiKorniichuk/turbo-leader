import React from 'react'
import { Route } from 'react-router-dom'
import { Container, Grid, makeStyles } from '@material-ui/core'
import MySites from '../../pages/MySites/MySites'
import Education from '../../pages/Education/Education'
import Payment from '../../pages/Payment/Payment'
import Profile from '../../pages/Profile/Profile'
import Contacts from '../../pages/Contacts/Contacts'
import { useSelector } from 'react-redux'


const useStyles = makeStyles((theme) => ({
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto'
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column'
	},
	fixedHeight: {
		height: 240
	}
}))


const Wrapper = (props) => {

	const classes = useStyles()

	const {username} = useSelector(state => state.auth)

	if (!username) return <div/>

	return (
		<main className={classes.content}>
			<div className={classes.appBarSpacer} />
			<Container maxWidth="lg" className={classes.container}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Route path='/my_profile'>
							<Profile />
						</Route>
						<Route path='/my_sites'>
							<MySites />
						</Route>
						<Route path='/contacts'>
							<Contacts />
						</Route>
						<Route path='/education'>
							<Education />
						</Route>
						<Route path='/payment'>
							<Payment />
						</Route>
					</Grid>
				</Grid>
			</Container>
		</main>
	)
}

export default Wrapper