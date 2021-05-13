import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, makeStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ContactAvatar from '../ContactAvatar/ContactAvatar'
import ContactData from '../ContactData/ContactData'


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	contactHeader: {
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		fontSize: 16
	},
	contactBody: {
		padding: theme.spacing(3,2),
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
	}
}))


export const DefaultContactsList = (props) => {

	const classes = useStyles()

	const [expanded, setExpanded] = React.useState('accordion_0')

	const handleChange = (panel) => (event, newExpanded) => setExpanded(newExpanded ? panel : false)

	return (
		<div className={classes.root}>
			{ props.list && props.list.map((contact, index) => (
				<Accordion
					key={index}
					expanded={expanded === `accordion_${index}`}
					onChange={handleChange(`accordion_${index}`)}
				>
					<AccordionSummary
						id="panel1a-header"
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						className={classes.contactHeader}
					>
						{`${contact.first_name} ${contact.last_name}`}
					</AccordionSummary>
					<AccordionDetails className={classes.contactBody}>
						<div className={classes.contactAvatarContainer}>
							<ContactAvatar photo={contact.photo} />
						</div>
						<div className={classes.contactDataContainer}>
							<ContactData
								username={contact.username}
								firstName={contact.first_name}
								lastName={contact.last_name}
								email={contact.email}
							/>
						</div>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	)
}