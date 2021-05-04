import React from 'react'
import { Route } from 'react-router-dom'
import MySites from '../../pages/MySites/MySites'
import { Container, Grid, makeStyles } from '@material-ui/core'


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

	return (
		<main className={classes.content}>
			<div className={classes.appBarSpacer} />
			<Container maxWidth="lg" className={classes.container}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Route path='/my_sites'>
							<MySites />
						</Route>
					</Grid>
				</Grid>
			</Container>
		</main>
	)
}

export default Wrapper