import React, { useEffect } from 'react'
import { Button, MenuItem, Paper, TextField, Typography } from '@material-ui/core'
import ProfileAvatar from './components/ProfileAvatar/ProfileAvatar'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { editUserProfileData, getUserProfileData } from '../../../store/profile/profileThunks'


const useStyles = makeStyles((theme) => ({
	form: {},
	profileHeader: {
		padding: theme.spacing(3),
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	avatarContainer: {
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		flex: 'auto',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center'
	},
	personalInfoContainer: {
		width: '60%'
	},
	userName: {
		marginTop: theme.spacing(1)
	},
	profileBody: {
		padding: theme.spacing(2, 3, 3),
		marginTop: theme.spacing(3),
	},
	profileSaveBtn: {
		marginTop: theme.spacing(2),
	}
}))


const Profile = (props) => {

	const classes = useStyles()

	const { id, username } = useSelector(state => state.auth)
	const profileData = useSelector(state => state.profile)
	const dispatch = useDispatch()

	useEffect(() => {
		if (username) dispatch(getUserProfileData(username))
	}, [dispatch, username])

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			// photo: profileData.first_name || '',
			first_name: profileData.first_name || '',
			last_name: profileData.last_name || '',
			email: profileData.email || '',
			bio: profileData.bio || '',
			gender: profileData.gender || 'Man',
			referral_link: profileData.referral_link || '',
			vk_link: profileData.vk_link || '',
			fb_link: profileData.fb_link || '',
			inst_link: profileData.inst_link || '',
			tg_link: profileData.tg_link || '',
			wt_link: profileData.wt_link || ''
		},
		onSubmit: values => {
			dispatch(editUserProfileData(id, values))
		}
	})

	return (
		<div>
			<form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
				<Paper className={classes.profileHeader}>
					<div className={classes.avatarContainer}>
						<ProfileAvatar
							firstName={profileData.first_name}
							lastName={profileData.last_name}
							formikValue={formik.values.photo}
							formikOnChange={formik.handleChange}
						/>
						<Typography component='span' variant='h5' className={classes.userName}>
							{ (profileData.first_name && profileData.last_name) &&
								`${profileData.first_name} ${profileData.last_name}`
							}
						</Typography>
						<Button
							type='submit'
							variant="contained"
							color='primary'
							className={classes.profileSaveBtn}
							disabled={false}
						>
							Зберегти
						</Button>
					</div>
					<div className={classes.personalInfoContainer}>
						<TextField
							margin='normal'
							required
							fullWidth
							name='first_name'
							label='Ім`я'
							type='first_name'
							id='first_name'
							autoComplete='first_name'
							value={formik.values.first_name}
							onChange={formik.handleChange}
							InputLabelProps={{ shrink: true }}
							disabled={false}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='last_name'
							label='Прізвище'
							type='last_name'
							id='last_name'
							autoComplete='last_name'
							value={formik.values.last_name}
							onChange={formik.handleChange}
							InputLabelProps={{ shrink: true }}
							disabled={false}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='email'
							label='Пошта'
							type='email'
							id='email'
							autoComplete='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							InputLabelProps={{ shrink: true }}
							disabled={false}
						/>
						<TextField
							select
							margin='normal'
							required
							fullWidth
							name='gender'
							label='Стать'
							id='gender'
							value={formik.values.gender}
							onChange={formik.handleChange}
							InputLabelProps={{ shrink: true }}
							disabled={false}
						>
							<MenuItem value='Man' name='Чоловік'>Чоловік</MenuItem>
							<MenuItem value='Woman' name='Жінка'>Жінка</MenuItem>
						</TextField>
					</div>
				</Paper>

				<Paper className={classes.profileBody}>
					<TextField
						margin='normal'
						required
						id='bio'
						name='bio'
						label='Додаткова інформація'
						fullWidth
						multiline
						rowsMax={8}
						value={formik.values.bio}
						onChange={formik.handleChange}
						InputLabelProps={{ shrink: true }}
					/>
				</Paper>

				<Paper className={classes.profileBody}>
					<TextField
						margin='normal'
						required
						fullWidth
						name='referral_link'
						label='Реферальне посилання'
						type='referral_link'
						id='referral_link'
						value={formik.values.referral_link}
						onChange={formik.handleChange}
						InputLabelProps={{ shrink: true }}
						disabled={false}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='vk_link'
						label='VK'
						type='vk_link'
						id='vk_link'
						value={formik.values.vk_link}
						onChange={formik.handleChange}
						InputLabelProps={{ shrink: true }}
						disabled={false}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='fb_link'
						label='Facebook'
						type='fb_link'
						id='fb_link'
						value={formik.values.fb_link}
						onChange={formik.handleChange}
						InputLabelProps={{ shrink: true }}
						disabled={false}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='inst_link'
						label='Instagram'
						type='inst_link'
						id='inst_link'
						value={formik.values.inst_link}
						onChange={formik.handleChange}
						InputLabelProps={{ shrink: true }}
						disabled={false}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='tg_link'
						label='Telegram'
						type='tg_link'
						id='tg_link'
						value={formik.values.tg_link}
						onChange={formik.handleChange}
						InputLabelProps={{ shrink: true }}
						disabled={false}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='wt_link'
						label='WhatsApp'
						type='wt_link'
						id='wt_link'
						value={formik.values.wt_link}
						onChange={formik.handleChange}
						InputLabelProps={{ shrink: true }}
						disabled={false}
					/>
				</Paper>
			</form>
		</div>
	)
}

export default Profile
