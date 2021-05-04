import React, { useEffect, useState } from 'react'
import { makeStyles, Accordion, AccordionSummary, AccordionDetails, Typography, Snackbar } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Alert from '@material-ui/lab/Alert'
import { Tables } from './components/Tables/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getSitesList } from '../../../store/sites/sitesThunks'


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

	const { mySitesList } = useSelector(state => state.sites)
	const { userName } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getSitesList())
	}, [dispatch])

	const openSnackbar = () => {
		setSnackbarView(true)
	}

	const closeSnackbar = () => {
		setSnackbarView(false)
	}

	return (
		<div className={classes.root}>
			{ mySitesList.map(site => (
				<Accordion key={site.id} defaultExpanded>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography className={classes.heading}>{site.product}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Tables siteName={site.name} siteLink={site.link} userName={userName} openSnackbar={openSnackbar} />
					</AccordionDetails>
				</Accordion>
			))}
			<Snackbar open={snackbarView} autoHideDuration={3000} onClose={closeSnackbar}>
				<Alert severity="success">
					Ссылка успешно скопирована!
				</Alert>
			</Snackbar>
		</div>
	)
}

export default MySites