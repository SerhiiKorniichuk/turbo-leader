import React  from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AssignmentIcon from '@material-ui/icons/Assignment'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'


const useStyles = makeStyles((theme) => ({
	listItemIcon: {
		paddingRight: '16px',
		display: 'flex',
		justifyContent: 'center'
	}
}))


export const SidebarNavigation = (props) => {

	const { is_paid } = useSelector(state => state.auth)
	const classes = useStyles()

	return (
		<div>
			<Link to='/my_profile'>
				<ListItem button>
					<ListItemIcon className={classes.listItemIcon}>
						<PersonIcon />
					</ListItemIcon>
					<ListItemText primary='Профіль' />
				</ListItem>
			</Link>
			{ is_paid &&
				<Link to='/my_sites'>
					<ListItem button>
						<ListItemIcon className={classes.listItemIcon}>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary='Мої сайти' />
					</ListItem>
				</Link>
			}
			{ is_paid &&
				<Link to='/contacts'>
					<ListItem button>
						<ListItemIcon className={classes.listItemIcon}>
							<PeopleIcon />
						</ListItemIcon>
						<ListItemText primary='Контакти' />
					</ListItem>
				</Link>
			}
			{ is_paid &&
				<Link to='/education'>
					<ListItem button>
						<ListItemIcon className={classes.listItemIcon}>
							<AssignmentIcon />
						</ListItemIcon>
						<ListItemText primary='Навчання' />
					</ListItem>
				</Link>
			}
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