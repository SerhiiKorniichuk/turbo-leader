import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography, withStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ContactCard } from '../ContactCard/ContactCard'


const AccordionHeader = withStyles({
	root: {
		// backgroundColor: 'rgba(0, 0, 0, .03)',
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56,
		},
	},
	content: {
		'&$expanded': {
			margin: '12px 0',
		},
	},
	expanded: {},
})(AccordionSummary)

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
		padding: theme.spacing(3,2)
	}
}))


export const ContactsList = (props) => {

	const classes = useStyles()

	const [expanded, setExpanded] = React.useState('')

	const handleChange = (panel) => (event, newExpanded) => setExpanded(newExpanded ? panel : false)

	if (props.list.length === 0 || !props.list) {
		return (
			<Typography variant="h6" align="center" color="textSecondary" component="p">
				Нажаль список порожній...
			</Typography>
		)
	}

	return (
		<div className={classes.root}>
			{props.list && props.list.map((contact, index) => (
				<Accordion
					key={index}
					expanded={expanded === `accordion_${index}`}
					onChange={handleChange(`accordion_${index}`)}
				>
					<AccordionHeader
						id="panel1a-header"
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						className={classes.contactHeader}
					>
						{contact.name && contact.name}
						{(contact.first_name && contact.last_name) && `${contact.first_name} ${contact.last_name}`}
					</AccordionHeader>
					<AccordionDetails className={classes.contactBody}>
						<ContactCard type={props.type} contactId={contact.id} contact={contact} />
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	)
}