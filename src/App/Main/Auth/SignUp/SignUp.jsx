import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../../../store/auth/authThunks'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { Grid, MenuItem, TextField, Button, Link as MaterialLink, makeStyles, CircularProgress } from '@material-ui/core'
import { validationSchema } from './validation/validationSchema'
import { AuthPreviewLogo } from '../components/AuthPreviewLogo/AuthPreviewLogo'
import { checkFormikFieldsValid } from '../../../../helpers/validation/checkFieldsValid'
import { localStorageService } from '../../../../helpers/localStorageService'


const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}))


const SignUp = (props) => {

	const classes = useStyles()

	const { is_loading } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	const referralUser = localStorageService.getReferralUser()

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
			email: '',
			first_name: '',
			last_name: '',
			gender: ''
		},
		validationSchema,
		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: values => {
			dispatch(signUp(values, !!referralUser && referralUser))
		}
	})

	const {errors, values, handleChange} = formik
	const isDisabled = checkFormikFieldsValid(errors, values) || is_loading

	return (
		<>
			<AuthPreviewLogo text='Створення аккаунта' />
			<form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					id='username'
					label='Нікнейм'
					name='username'
					autoComplete='username'
					autoFocus
					value={values.username}
					onChange={handleChange}
					disabled={is_loading}
					helperText={errors.username && errors.username}
				/>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					name='password'
					label='Пароль'
					type='password'
					id='password'
					autoComplete='current-password'
					value={values.password}
					onChange={handleChange}
					disabled={is_loading}
					helperText={errors.password && errors.password}
				/>
				<TextField
					variant='outlined'
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
					disabled={is_loading}
					helperText={errors.email && errors.email}
				/>
				<TextField
					variant='outlined'
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
					disabled={is_loading}
					helperText={errors.first_name && errors.first_name}
				/>
				<TextField
					variant='outlined'
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
					disabled={is_loading}
					helperText={errors.last_name && errors.last_name}
				/>
				<TextField
					select
					variant='outlined'
					margin='normal'
					required
					fullWidth
					name='gender'
					label='Стать'
					id='gender'
					value={values.gender}
					onChange={handleChange}
					disabled={is_loading}
					helperText={errors.gender && errors.gender}
				>
					<MenuItem value='Man' name='Чоловік'>Чоловік</MenuItem>
					<MenuItem value='Woman' name='Жінка'>Жінка</MenuItem>
				</TextField>
				<Button
					type='submit'
					fullWidth
					size='large'
					variant='contained'
					color='primary'
					className={classes.submit}
					disabled={isDisabled}
				>
					{is_loading ? <CircularProgress color='inherit' size={30} /> : 'Створити аккаунт'}
				</Button>
				<Grid container>
					<Grid item>
						<Link to='/auth/sign-in'>
							<MaterialLink component='span'>
								Маєте аккаунт? Увійти
							</MaterialLink>
						</Link>
					</Grid>
				</Grid>
			</form>
		</>
	)
}

export default SignUp