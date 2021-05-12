import React from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
	avatar: {
		width: 150,
		height: 150,
	}
}))


const ContactAvatar = (props) => {

	const classes = useStyles()

	return (
		<>
			<Avatar
				src={props.photo ? props.photo : ''}
				className={classes.avatar}
			/>
		</>
	)
}

export default ContactAvatar
