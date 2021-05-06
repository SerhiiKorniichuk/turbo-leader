import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../../../../store/auth/authThunks'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import {
    Grid,
    TextField,
    Avatar,
    Typography,
    Button,
    Link as MaterialLink,
    makeStyles,
    CircularProgress
} from '@material-ui/core'
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
        margin: theme.spacing(3, 0, 2),
    }
}))


const SignIn = (props) => {

    const classes = useStyles()

    const { isLoading } = useSelector(state => state.auth)
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
                Вхід в аккаунт
            </Typography>
            <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
                <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Пошта'
                    name='email'
                    autoComplete='email'
                    autoFocus
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    disabled={isLoading}
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
                    disabled={isLoading}
                />
                <Button
                    type='submit'
                    fullWidth
                    size='large'
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                    disabled={isLoading}
                >
                    {isLoading ? <CircularProgress color='inherit' size={30} /> : 'Увійти'}
                </Button>
                <Grid container>
                    <Grid item>
                        <Link to='/auth/sign-up'>
                            <MaterialLink component='span'>
                                Немає аккаунту? Створити
                            </MaterialLink>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default SignIn