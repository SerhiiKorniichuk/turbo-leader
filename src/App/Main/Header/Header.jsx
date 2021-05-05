import React from 'react'
import { useDispatch } from 'react-redux'
import { signOut } from '../../../store/auth/authThunks'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { drawerWidth } from '../Main'
import { Toolbar, IconButton, Typography, AppBar, Button, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles((theme) => ({
	toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	menuButtonHidden: {
		display: 'none'
	},
	title: {
		flexGrow: 1
	}
}))


const Header = (props) => {

	const classes = useStyles()

	const dispatch = useDispatch()

	const onSignOut = (e) => {
		e.preventDefault()
		dispatch(signOut())
	}

	return (
		<AppBar position='absolute' className={clsx(classes.appBar, props.open && classes.appBarShift)}>
			<Toolbar className={classes.toolbar}>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='open drawer'
					onClick={props.handleDrawerOpen}
					className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
				>
					<MenuIcon />
				</IconButton>
				<Typography component='h1' variant='h6' color='inherit' noWrap className={classes.title}>
					<Link to='/'>
						Turbo Leader
					</Link>
				</Typography>
				<Button color='inherit' onClick={onSignOut}>Выйти</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Header