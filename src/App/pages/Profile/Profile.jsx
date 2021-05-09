import React, { useEffect } from 'react'
import { MenuItem, Paper, TextField, Typography } from '@material-ui/core'
import ProfileAvatar from './components/ProfileAvatar/ProfileAvatar'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfileData } from '../../../store/profile/profileThunks'


const useStyles = makeStyles((theme) => ({
	profileHeader: {
		padding: theme.spacing(3),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	userName: {
		marginTop: theme.spacing(1)
	},
	profileBody: {
		padding: theme.spacing(1, 3, 4),
		marginTop: theme.spacing(3),
		display: 'flex',
		justifyContent: 'center'
	},
	form: {}
}))


const Profile = (props) => {

	const classes = useStyles()

	const { username } = useSelector(state => state.auth)
	const profileData = useSelector(state => state.profile)
	const dispatch = useDispatch()

	useEffect(() => {
		if (username) dispatch(getUserProfileData(username))
	}, [dispatch, username])

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			first_name: profileData.first_name,
			last_name: profileData.last_name,
			email: profileData.email,
			gender: profileData.gender || 'Man',
			vk_link: profileData.vk_link,
			fb_link: profileData.fb_link,
			inst_link: profileData.inst_link,
			tg_link: profileData.tg_link,
			wt_link: profileData.wt_link
		},
		onSubmit: values => {
			console.log(values)
		}
	})

	if (profileData.is_loading) return <div/>

	return (
		<div>
			<Paper className={classes.profileHeader}>
				<ProfileAvatar
					photo={profileData.photo}
					firstName={profileData.first_name}
					lastName={profileData.last_name}
				/>
				<Typography component='span' variant='h5' className={classes.userName}>
					{`${profileData.first_name} ${profileData.last_name}`}
				</Typography>
			</Paper>
			<Paper className={classes.profileBody}>
				<form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
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
						disabled={false}
					>
						<MenuItem value='Man' name='Чоловік'>Чоловік</MenuItem>
						<MenuItem value='Woman' name='Жінка'>Жінка</MenuItem>
					</TextField>
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
						disabled={false}
					/>
				</form>
			</Paper>
		</div>
	)
}

export default Profile
