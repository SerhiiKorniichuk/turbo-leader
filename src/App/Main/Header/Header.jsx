import React from 'react'
import clsx from 'clsx'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import { drawerWidth } from '../Main'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { setAuthUserDataWithThunk } from '../../../store/auth/auth-thunks'


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

	const onClick = (e) => {
		e.preventDefault()
		props.setAuthUserDataWithThunk(false)
	}

	return (
		<AppBar position="absolute" className={clsx(classes.appBar, props.open && classes.appBarShift)}>
			<Toolbar className={classes.toolbar}>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={props.handleDrawerOpen}
					className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
				>
					<MenuIcon />
				</IconButton>
				<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
					Turbo Leader
				</Typography>
				<Button color="inherit" onClick={onClick}>Sing out</Button>
			</Toolbar>
		</AppBar>
	)
}

const mapStateToProps = ({ auth }) => {
	return {
		isLogged: auth.isLogged
	}
}

const mapDispatchToProps = {
	setAuthUserDataWithThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)