import React from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../../../../store/auth/authThunks'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { Grid, TextField, Avatar, Typography, Button, Link as MaterialLink, makeStyles } from '@material-ui/core'
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


const SignIn = (props) => {

    const classes = useStyles()

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            dispatch(signIn(values))
        }
    })

    return (
        <>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component='h1' variant='h5'>
                Вход в аккаунт
            </Typography>
            <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
                <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Почта'
                    name='email'
                    autoComplete='email'
                    autoFocus
                    value={formik.values.email}
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
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                >
                    Войти
                </Button>
                <Grid container>
                    <Grid item>
                        <Link to='/auth/sign-up'>
                            <MaterialLink component='span'>
                                Хотите зарегистрироваться?
                            </MaterialLink>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default SignIn