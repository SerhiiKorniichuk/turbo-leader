import React  from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles, Link as MaterialLink, ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core'
import { Person, People, Dashboard, Assignment, ShoppingCart, RemoveRedEye } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
	listItemIcon: {
		paddingRight: '16px',
		display: 'flex',
		justifyContent: 'center'
	}
}))


export const SidebarNavigation = (props) => {

	const { is_paid, is_superuser } = useSelector(state => state.auth)
	const classes = useStyles()

	return (
		<div>
			<Link to='/my_profile'>
				<ListItem button>
					<ListItemIcon className={classes.listItemIcon}>
						<Person />
					</ListItemIcon>
					<ListItemText primary='Профіль' />
				</ListItem>
			</Link>
			{ is_paid &&
				<>
					<Link to='/my_sites'>
						<ListItem button>
							<ListItemIcon className={classes.listItemIcon}>
								<Dashboard />
							</ListItemIcon>
							<ListItemText primary='Мої сайти' />
						</ListItem>
					</Link>
					<Link to='/contacts'>
						<ListItem button>
							<ListItemIcon className={classes.listItemIcon}>
								<People />
							</ListItemIcon>
							<ListItemText primary='Контакти' />
						</ListItem>
					</Link>
					<Link to='/education'>
						<ListItem button>
							<ListItemIcon className={classes.listItemIcon}>
								<Assignment />
							</ListItemIcon>
							<ListItemText primary='Навчання' />
						</ListItem>
					</Link>
				</>
			}
			<Link to='/payment'>
				<ListItem button>
					<ListItemIcon className={classes.listItemIcon}>
						<ShoppingCart />
					</ListItemIcon>
					<ListItemText primary='Оплата' />
				</ListItem>
			</Link>
			{ is_superuser &&
				<>
					<Divider />
					<MaterialLink
						href='https://api-turbo-leader.herokuapp.com/admin'
						target='_blank'
						color='inherit'
						component='a'
						underline='none'
					>
						<ListItem button>
							<ListItemIcon className={classes.listItemIcon}>
								<RemoveRedEye />
							</ListItemIcon>
							<ListItemText primary='Адмін панель'/>
						</ListItem>
					</MaterialLink>
				</>
			}
		</div>
	)
}