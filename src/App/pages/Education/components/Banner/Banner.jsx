import React from 'react'
import { Chip, Grid, makeStyles, Paper, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
	banner: {
		position: 'relative',
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	},
	bannerOverlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.3)'
	},
	bannerContent: {
		position: 'relative',
		padding: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(6),
			paddingRight: 0
		}
	}
}))


const Banner = (props) => {

	const classes = useStyles()

	return (
		<>
			<Paper className={classes.banner} style={{ backgroundImage: `url(${props.data.main_photo})` }}>
				<div className={classes.bannerOverlay} />
				<Grid container>
					<Grid item md={6}>
						<div className={classes.bannerContent}>
							<Typography component="h1" variant="h3" color="inherit" gutterBottom>
								{props.data.title}
							</Typography>
							<Typography variant="h5" color="inherit" paragraph>
								{props.data.text_min}
							</Typography>
							<Chip
								size="small"
								label={props.data.keywords}
								disabled
							/>
						</div>
					</Grid>
				</Grid>
			</Paper>
		</>
	)
}

export default Banner