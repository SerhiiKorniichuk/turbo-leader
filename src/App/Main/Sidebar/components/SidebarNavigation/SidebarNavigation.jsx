import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PeopleIcon from '@material-ui/icons/People'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AssignmentIcon from '@material-ui/icons/Assignment'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
	listItemIcon: {
		paddingRight: '16px',
		display: 'flex',
		justifyContent: 'center'
	}
}))


const SidebarNavigation = (props) => {

	const classes = useStyles()

	return (
		<div>
			<Link to='/my_profile'>
				<ListItem button>
					<ListItemIcon className={classes.listItemIcon}>
						<PeopleIcon />
					</ListItemIcon>
					<ListItemText primary='Профіль' />
				</ListItem>
			</Link>
			<Link to='/my_sites'>
				<ListItem button>
					<ListItemIcon className={classes.listItemIcon}>
						<DashboardIcon />
					</ListItemIcon>
					<ListItemText primary='Мої сайти' />
				</ListItem>
			</Link>
			<Link to='/contacts'>
				<ListItem button>
					<ListItemIcon className={classes.listItemIcon}>
						<PeopleIcon />
					</ListItemIcon>
					<ListItemText primary='Контакти' />
				</ListItem>
			</Link>
			<Link to='/education'>
				<ListItem button>
					<ListItemIcon className={classes.listItemIcon}>
						<AssignmentIcon />
					</ListItemIcon>
					<ListItemText primary='Навчання' />
				</ListItem>
			</Link>
			<Link to='/payment'>
				<ListItem button>
					<ListItemIcon className={classes.listItemIcon}>
						<ShoppingCartIcon />
					</ListItemIcon>
					<ListItemText primary='Оплата' />
				</ListItem>
			</Link>
		</div>
	)
}

export default SidebarNavigation