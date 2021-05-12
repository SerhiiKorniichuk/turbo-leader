import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
	},
	listItem: {
		paddingLeft: 2,
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	addText: {
		display: 'block',
		fontSize: 12,
		fontWeight: 700
	},
	mainText: {
		display: 'block'
	}
}))


const ContactData = (props) => {

	const classes = useStyles()

	return (
		<List className={classes.root}>
			<ListItem className={classes.listItem}>
				<Typography color='primary' className={classes.addText}>
					Нікнейм
				</Typography>
				<Typography className={classes.mainText}>
					{props.username}
				</Typography>
			</ListItem>
			<Divider component="li" />
			<ListItem className={classes.listItem}>
				<Typography color='primary' className={classes.addText}>
					Ім'я та прізвище
				</Typography>
				<Typography className={classes.mainText}>
					{props.firstName} {props.lastName}
				</Typography>
			</ListItem>
			<Divider component="li" />
			<ListItem className={classes.listItem}>
				<Typography color='primary' className={classes.addText}>
					Почта
				</Typography>
				<Typography className={classes.mainText}>
					{props.email}
				</Typography>
			</ListItem>
		</List>
	)
}

export default ContactData