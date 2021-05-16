import React, { useEffect } from 'react'
import { Button, MenuItem, Paper, TextField, Typography } from '@material-ui/core'
import ProfileAvatar from './components/ProfileAvatar/ProfileAvatar'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { editUserProfileData, getUserProfileData } from '../../../store/profile/profileThunks'
import { validationSchema } from './validation/validationSchema'
import { checkFormikFieldsValid } from '../../../helpers/validation/checkFieldsValid'
import { comparisonValues } from '../../../helpers/validation/comparisonValues'


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
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
		marginTop: theme.spacing(1),
		minHeight: 32
	},
	profileBody: {
		padding: theme.spacing(2, 3, 3),
		marginTop: theme.spacing(3),
	},
	profileSaveBtn: {
		marginTop: theme.spacing(2),
	}
}))


const Profile = () => {

	const classes = useStyles()

	const { is_loading, id, username } = useSelector(state => state.auth)
	const profileData = useSelector(state => state.profile)
	const dispatch = useDispatch()

	useEffect(() => {
		if (username) dispatch(getUserProfileData(username))
	}, [dispatch, username])

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			first_name: profileData.first_name || '',
			last_name: profileData.last_name || '',
			email: profileData.email || '',
			bio: profileData.bio || '',
			gender: profileData.gender || '',
			referral_link: profileData.referral_link || '',
			vk_link: profileData.vk_link || '',
			fb_link: profileData.fb_link || '',
			inst_link: profileData.inst_link || '',
			tg_link: profileData.tg_link || '',
			wt_link: profileData.wt_link || ''
		},
		validationSchema,
		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: values => {
			dispatch(editUserProfileData(id, values))
		}
	})

	const {errors, values, handleChange} = formik

	const isLoading = is_loading || profileData.is_loading
	const isDisabled = comparisonValues(profileData, values) || checkFormikFieldsValid(errors, values) || isLoading

	return (
		<div className={classes.root}>
			<form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
				<Paper className={classes.profileHeader}>
					<div className={classes.avatarContainer}>
						<ProfileAvatar />
						<Typography component='span' variant='h5' className={classes.userName}>
							{profileData.first_name && profileData.last_name &&
								`${profileData.first_name} ${profileData.last_name}`
							}
						</Typography>
						<Button
							type='submit'
							variant="contained"
							color='primary'
							className={classes.profileSaveBtn}
							disabled={isDisabled}
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
							value={values.first_name}
							onChange={handleChange}
							InputLabelProps={{ shrink: true }}
							disabled={isLoading}
							helperText={errors.first_name && errors.first_name}
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
							value={values.last_name}
							onChange={handleChange}
							InputLabelProps={{ shrink: true }}
							disabled={isLoading}
							helperText={errors.last_name && errors.last_name}
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
							value={values.email}
							onChange={handleChange}
							InputLabelProps={{ shrink: true }}
							disabled={isLoading}
							helperText={errors.email && errors.email}
						/>
						<TextField
							select
							margin='normal'
							required
							fullWidth
							name='gender'
							label='Стать'
							id='gender'
							value={values.gender}
							onChange={handleChange}
							InputLabelProps={{ shrink: true }}
							disabled={isLoading}
							helperText={errors.gender && errors.gender}
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
						value={values.bio}
						onChange={handleChange}
						InputLabelProps={{ shrink: true }}
						disabled={isLoading}
						helperText={errors.bio && errors.bio}
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
						value={values.referral_link}
						onChange={handleChange}
						InputLabelProps={{ shrink: true }}
						disabled={isLoading}
						helperText={errors.referral_link && errors.referral_link}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='vk_link'
						label='VK'
						type='vk_link'
						id='vk_link'
						value={values.vk_link}
						onChange={handleChange}
						InputLabelProps={{ shrink: true }}
						disabled={isLoading}
						helperText={errors.vk_link && errors.vk_link}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='fb_link'
						label='Facebook'
						type='fb_link'
						id='fb_link'
						value={values.fb_link}
						onChange={handleChange}
						InputLabelProps={{ shrink: true }}
						disabled={isLoading}
						helperText={errors.fb_link && errors.fb_link}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='inst_link'
						label='Instagram'
						type='inst_link'
						id='inst_link'
						value={values.inst_link}
						onChange={handleChange}
						InputLabelProps={{ shrink: true }}
						disabled={isLoading}
						helperText={errors.inst_link && errors.inst_link}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='tg_link'
						label='Telegram'
						type='tg_link'
						id='tg_link'
						value={values.tg_link}
						onChange={handleChange}
						InputLabelProps={{ shrink: true }}
						disabled={isLoading}
						helperText={errors.tg_link && errors.tg_link}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='wt_link'
						label='WhatsApp'
						type='wt_link'
						id='wt_link'
						value={values.wt_link}
						onChange={handleChange}
						InputLabelProps={{ shrink: true }}
						disabled={isLoading}
						helperText={errors.wt_link && errors.wt_link}
					/>
				</Paper>
			</form>
		</div>
	)
}

export default Profile
