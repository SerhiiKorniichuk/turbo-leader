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
				<Tab label='Список #1' />
				<Tab label='Список #2' />
				<Tab label='Список #3' disabled />
			</Tabs>
		</Paper>
	)
}
