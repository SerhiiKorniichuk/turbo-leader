import React from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../../../../store/auth/authThunks'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { Grid, MenuItem, TextField, Avatar, Typography, Button, Link as MaterialLink, makeStyles } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'


const useStyles = makeStyles((theme) => ({
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
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

	const dispatch = useDispatch()

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
			email: '',
			first_name: '',
			last_name: '',
			gender: ''
		},
		onSubmit: values => {
			dispatch(signUp(values))
		}
	})

	return (
		<>
			<Avatar className={classes.avatar}>
				<LockOutlinedIcon/>
			</Avatar>
			<Typography component='h1' variant='h5'>
				Регистрация аккаунта
			</Typography>
			<form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					id='username'
					label='Никнейм'
					name='username'
					autoComplete='username'
					autoFocus
					value={formik.values.username}
					onChange={formik.handleChange}
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
					value={formik.values.password}
					onChange={formik.handleChange}
				/>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					name='email'
					label='Почта'
					type='email'
					id='email'
					autoComplete='email'
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					name='first_name'
					label='Имя'
					type='first_name'
					id='first_name'
					autoComplete='first_name'
					value={formik.values.first_name}
					onChange={formik.handleChange}
				/>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					name='last_name'
					label='Фамилия'
					type='last_name'
					id='last_name'
					autoComplete='last_name'
					value={formik.values.last_name}
					onChange={formik.handleChange}
				/>
				<TextField
					select
					variant='outlined'
					margin='normal'
					required
					fullWidth
					name='gender'
					label='Пол'
					id='gender'
					value={formik.values.gender}
					onChange={formik.handleChange}
				>
					<MenuItem value='Man' name='Мужчина'>Мужчина</MenuItem>
					<MenuItem value='Woman' name='Женщина'>Женщина</MenuItem>
				</TextField>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					color='primary'
					className={classes.submit}
				>
					Зарегестрироваться
				</Button>
				<Grid container>
					<Grid item>
						<Link to='/auth/sign-in'>
							<MaterialLink component='span'>
								Хотите войти в аккаунт?
							</MaterialLink>
						</Link>
					</Grid>
				</Grid>
			</form>
		</>
	)
}

export default SignUp