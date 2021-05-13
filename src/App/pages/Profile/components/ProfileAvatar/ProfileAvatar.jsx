import React from 'react'
import { Badge, Avatar, IconButton, Input } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { PhotoCamera } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { editUserProfileData } from '../../../../../store/profile/profileThunks'


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

	const { id } = useSelector(state => state.auth)
	const profileData = useSelector(state => state.profile)
	const dispatch = useDispatch()

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
						<Input
							id="icon-button-file"
							className={classes.input}
							accept=".png, .jpg, .jpeg"
							type="file"
							onChange={e => {
								let formData = new FormData()
								formData.append('photo', e.target.files[0], e.target.files[0].name)
								dispatch(editUserProfileData(id, formData ))
							}}
						/>
						<label htmlFor="icon-button-file">
							<IconButton color="secondary" aria-label="upload picture" component="span">
								<PhotoCamera className={classes.inputIcon} />
							</IconButton>
						</label>
					</SmallAvatar>
				}
			>
				<Avatar
					src={profileData.photo ? profileData.photo : ''}
					className={classes.avatar}
				/>
			</Badge>
		</div>
	)
}

export default ProfileAvatar