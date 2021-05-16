import React from 'react'
import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(4),
		width: '100%',
	},
	tab: {
		padding: '16px'
	}
}))


export const ContactsTabs = (props) => {

	const classes = useStyles()

	const handleChange = (event, newValue) => props.onChange(newValue)

	return (
		<Paper className={classes.root}>
			<Tabs
				value={props.value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab label='Реферали' className={classes.tab} />
				<Tab label='Контакти з лендінгу' className={classes.tab} />
				<Tab label='Контакти з боту' className={classes.tab} disabled />
			</Tabs>
		</Paper>
	)
}
