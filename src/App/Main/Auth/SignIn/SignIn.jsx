import React from 'react'
import { useDispatch } from 'react-redux'
import { setAuthUserDataWithThunk } from '../../../../store/auth/authThunks'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'


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

    const onFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component='h1' variant='h5'>
                Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={onFormSubmit}>
                <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    autoFocus
                />
                <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                />
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href='#' variant='body2' onClick={() => props.setAuthType('singUp')}>
                            {'Don`t have an account? Sign Up'}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default SignIn