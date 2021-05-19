import React from 'react'
import clsx from 'clsx'
import { ChevronLeft } from '@material-ui/icons'
import { makeStyles, Drawer, Divider, List, IconButton } from '@material-ui/core'
import { drawerWidth } from '../Main'
import { SidebarNavigation } from './components/SidebarNavigation/SidebarNavigation'


const useStyles = makeStyles((theme) => ({
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9)
		}
	}
}))


const Sidebar = (props) => {

	const classes = useStyles()

	return (
		<Drawer
			variant="permanent"
			classes={{
				paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
			}}
			open={props.open}
		>
			<div className={classes.toolbarIcon}>
				<IconButton onClick={props.handleDrawerClose}>
					<ChevronLeft />
				</IconButton>
			</div>
			<Divider />
			<List>
				<SidebarNavigation />
			</List>
		</Drawer>
	)
}

export default Sidebar