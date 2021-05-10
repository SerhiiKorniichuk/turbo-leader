import React from 'react'
import { Badge, Avatar, IconButton } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { PhotoCamera } from '@material-ui/icons'


const SmallAvatar = withStyles((theme) => ({
	root: {
		width: 30,
		height: 30,
		border: `2px solid ${theme.palette.background.paper}`,
		cursor: 'pointer'
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
	},
	input: {
		display: 'none',
	},
	inputIcon: {
		paddingTop: '1px',
		color: 'white',
		width: 15
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
					<SmallAvatar>
						<input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
						<label htmlFor="icon-button-file">
							<IconButton color="secondary" aria-label="upload picture" component="span">
								<PhotoCamera className={classes.inputIcon} />
							</IconButton>
						</label>
					</SmallAvatar>
				}
			>
				<Avatar
					src={props.photo ? props.photo : ''}
					className={classes.avatar}
				/>
			</Badge>
		</div>
	)
}

export default ProfileAvatar