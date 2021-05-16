import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../../store/auth/authThunks'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { drawerWidth } from '../Main'
import { Toolbar, IconButton, Typography, AppBar, makeStyles, MenuItem, Menu, Avatar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import TLMiniLogo from './../../../assets/img/logos/TL-mini-logo.png'


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
	logoContainer: {
		flexGrow: 1,
		display: 'flex',
		alignItems: 'center'
	},
	logoContainerInner: {
		display: 'inline-flex',
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	logo: {
		marginRight: theme.spacing(1)
	},
	avatar: {
		width: theme.spacing(3),
		height: theme.spacing(3	),
		color: theme.palette.primary.main,
		backgroundColor: 'white'
	},
	userButton: {
		borderRadius: '10px'
	},
	userButtonText: {
		marginRight: '10px'
	}
}))


const Header = (props) => {

	const classes = useStyles()

	const { username, photo } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleMenu = (event) => setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)

	const onSignOut = (e) => {
		e.preventDefault()
		handleClose()
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
				<div className={classes.logoContainer}>
					<Link to='/' className={classes.logoContainerInner}>
						<Avatar src={TLMiniLogo} className={classes.logo} />
						<Typography component='h1' variant='h6' color='inherit' noWrap>
							Turbo Leader
						</Typography>
					</Link>
				</div>
				<div>
					<IconButton
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						color="inherit"
						className={classes.userButton}
						onClick={handleMenu}
					>
						<Typography className={classes.userButtonText}>{username}</Typography>
						<Avatar src={photo ? photo : ''} className={classes.avatar} />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
						keepMounted
						transformOrigin={{ vertical: 'top', horizontal: 'right' }}
						open={open}
						onClose={handleClose}
					>
						<Link to='/my_profile'>
							<MenuItem onClick={handleClose}>
								Профіль
							</MenuItem>
						</Link>
						<MenuItem onClick={onSignOut}>Вийти з аккаунту</MenuItem>
					</Menu>
				</div>
			</Toolbar>
		</AppBar>
	)
}

export default Header