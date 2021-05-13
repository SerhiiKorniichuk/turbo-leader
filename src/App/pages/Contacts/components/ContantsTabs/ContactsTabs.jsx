import React from 'react'
import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(4),
		width: '100%'
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
				<Tab label='Реферали' />
				<Tab label='Контакти з лендінгу' />
				<Tab label='Контакти з боту' disabled />
			</Tabs>
		</Paper>
	)
}
