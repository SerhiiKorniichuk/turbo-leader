import React from 'react'
import { Badge, Avatar } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'


const SmallAvatar = withStyles((theme) => ({
	root: {
		width: 35,
		height: 35,
		border: `2px solid ${theme.palette.background.paper}`
	}
}))(Avatar)

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	avatar: {
		width: 150,
		height: 150,
	}
}))


const ProfileAvatar = (props) => {

	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Badge
				overlap="circle"
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				badgeContent={
					<SmallAvatar
						alt="Remy Sharp"
						src="/static/images/avatar/1.jpg"
					/>
				}
			>
				<Avatar
					alt={`${props.firstName} ${props.lastName}`}
					src={props.photo}
					className={classes.avatar}
				/>
			</Badge>
		</div>
	)
}

export default ProfileAvatar