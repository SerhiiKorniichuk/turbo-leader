import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PeopleIcon from '@material-ui/icons/People'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AssignmentIcon from '@material-ui/icons/Assignment'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'


const SidebarNavigation = (props) => {
	return (
		<div>
			<Link to='/profile'>
				<ListItem button>
					<ListItemIcon>
						<PeopleIcon />
					</ListItemIcon>
					<ListItemText primary='Профиль' />
				</ListItem>
			</Link>
			<Link to='/my_sites'>
				<ListItem button>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<ListItemText primary='Мои сайты' />
				</ListItem>
			</Link>
			<Link to='/contacts'>
				<ListItem button>
					<ListItemIcon>
						<PeopleIcon />
					</ListItemIcon>
					<ListItemText primary='Контакты' />
				</ListItem>
			</Link>
			<Link to='/education'>
				<ListItem button>
					<ListItemIcon>
						<AssignmentIcon />
					</ListItemIcon>
					<ListItemText primary='Образование' />
				</ListItem>
			</Link>
			<Link to='/payments'>
				<ListItem button>
					<ListItemIcon>
						<ShoppingCartIcon />
					</ListItemIcon>
					<ListItemText primary='Оплата' />
				</ListItem>
			</Link>
		</div>
	)
}

export default SidebarNavigation