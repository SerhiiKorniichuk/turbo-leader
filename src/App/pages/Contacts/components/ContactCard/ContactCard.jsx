import React from 'react'
import ContactAvatar from '../ContactAvatar/ContactAvatar'
import { ContactMainData } from '../ContactMainData/ContactMainData'
import { makeStyles } from '@material-ui/core'
import { ContactAddData } from '../ContactAddData/ContactAddData'


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	topBlock: {
		display: 'flex',
		alignItems: 'center'
	},
	contactAvatarContainer: {
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		flex: 'auto',
		display: 'flex',
		justifyContent: 'center'
	},
	contactDataContainer: {
		width: '75%'
	},
	bottomBlock: {
		marginTop: theme.spacing(1)
	}
}))


export const ContactCard = (props) => {

	const classes = useStyles()

	const {contact} = props

	return (
		<div className={classes.root}>
			<div className={classes.topBlock}>
				<div className={classes.contactAvatarContainer}>
					<ContactAvatar photo={contact.photo} />
				</div>
				<div className={classes.contactDataContainer}>
					<ContactMainData
						siteUrl={contact.site_url}
						name={contact.name}
						username={contact.username}
						firstName={contact.first_name}
						lastName={contact.last_name}
						numberPhone={contact.number_phone}
						email={contact.email}
					/>
				</div>
			</div>
			<div className={classes.bottomBlock}>
				<ContactAddData type={props.type} contactId={props.contactId} comment={contact.comment} />
			</div>
		</div>
	)
}
