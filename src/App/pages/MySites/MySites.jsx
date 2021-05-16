import React, { useEffect, useState } from 'react'
import {
	makeStyles, Accordion, AccordionSummary,
	AccordionDetails, Typography, Snackbar, withStyles
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Alert from '@material-ui/lab/Alert'
import { Tables } from './components/Tables/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getSitesList } from '../../../store/sites/sitesThunks'


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
	heading: {
		fontSize: theme.typography.pxToRem(20),
		fontWeight: theme.typography.fontWeightRegular
	}
}))


const MySites = () => {

	const classes = useStyles()

	const [snackbarView, setSnackbarView] = useState(false)

	const { my_sites_list } = useSelector(state => state.sites)
	const { username } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getSitesList())
	}, [dispatch])

	const openSnackbar = () => setSnackbarView(true)
	const closeSnackbar = () => setSnackbarView(false)

	return (
		<div className={classes.root}>
			{ my_sites_list.map(site => (
				<Accordion key={site.id} defaultExpanded>
					<AccordionHeader
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography className={classes.heading}>{site.name}</Typography>
					</AccordionHeader>
					<AccordionDetails>
						<Tables productLinks={site.site} username={username} openSnackbar={openSnackbar} />
					</AccordionDetails>
				</Accordion>
			))}
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				open={snackbarView}
				autoHideDuration={3000}
				onClose={closeSnackbar}
			>
				<Alert severity="success">
					Посилання успішно скопійовано!
				</Alert>
			</Snackbar>
		</div>
	)
}

export default MySites