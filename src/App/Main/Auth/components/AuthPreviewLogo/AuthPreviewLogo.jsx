import React from 'react'
import { Avatar, makeStyles, Typography } from '@material-ui/core'
import TLMainLogo from '../../../../../assets/img/logos/TL-mini-logo.png'


const useStyles = makeStyles((theme) => ({
	logoContainer: {
		margin: theme.spacing(1),
		backgroundColor: 'transparent',
		'& img': {
			maxWidth: '100%',
			maxHeight: '100%'
		}
	}
}))


export const AuthPreviewLogo = (props) => {

	const classes = useStyles()

	return (
		<>
			<Avatar className={classes.logoContainer}>
				<img src={TLMainLogo} alt="TL-logo"/>
			</Avatar>
			<Typography component='h1' variant='h5'>
				{props.text && props.text}
			</Typography>
		</>
	)
}
