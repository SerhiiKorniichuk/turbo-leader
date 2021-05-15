import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../../../../store/auth/authThunks'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { Grid, TextField, Button, Link as MaterialLink, makeStyles, CircularProgress } from '@material-ui/core'
import { validationSchema } from './validation/validationSchema'
import { AuthPreviewLogo } from '../components/AuthPreviewLogo/AuthPreviewLogo'
import { checkFormikFieldsValid } from '../../../../helpers/validation/checkFieldsValid'


const useStyles = makeStyles((theme) => ({
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

    const { is_loading } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: values => {
            dispatch(signIn(values))
        }
    })

    const {errors, values, handleChange} = formik
    const isDisabled = checkFormikFieldsValid(errors, values) || is_loading

    return (
        <>
            <AuthPreviewLogo text='Вхід в аккаунт' />
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
                <Button
                    type='submit'
                    fullWidth
                    size='large'
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                    disabled={isDisabled}
                >
                    {is_loading ? <CircularProgress color='inherit' size={30} /> : 'Увійти'}
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