import React, { useEffect } from 'react'
import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Chip, Container,
	Divider,
	Grid, makeStyles,
	Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { getEducationPostsList } from '../../../../../store/education/educationThunks'


const useStyles = makeStyles((theme) => ({
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	cardLink: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	cardActionArea: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
		width: '100%'
	},
	cardContent: {
		height: '100%',
		width: '100%'
	},
	cardDate: {
		marginBottom: '12px'
	},
	cardAddContent: {
		paddingTop: 0,
		paddingBottom: '10px',
		width: '100%',
	},
	cardChip: {
		maxWidth: '100%'
	}
}))


const EducationsList = (props) => {

	const classes = useStyles()

	const { is_loading, education_posts_list } = useSelector(state => state.education)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getEducationPostsList())
	}, [dispatch])

	if (is_loading) return null

	if (education_posts_list.length === 0 || !education_posts_list) {
		return (
			<Typography variant="h6" align="center" color="textSecondary" component="p">
				Нажаль список порожній...
			</Typography>
		)
	}

	return (
		<Container>
			<Grid container spacing={4}>
				{education_posts_list.map((post) => (
					<Grid item xs={12} sm={12} md={6} lg={4} key={post.id}>
						<Link to={`/education/${post.id}`} className={classes.cardLink}>
							<Card className={classes.card}>
								<CardActionArea component="div" className={classes.cardActionArea}>
									<CardMedia
										className={classes.cardMedia}
										image={post.main_photo}
										title={post.title}
									/>
									<CardContent className={classes.cardContent}>
										<Typography className={classes.cardDate} color="textSecondary">
											{moment.parseZone(post.created).utc(true).format('LLL')}
										</Typography>
										<Typography gutterBottom variant="h5" component="h2">
											{post.title}
										</Typography>
										<Typography>
											{post.text_min}
										</Typography>
									</CardContent>
									<Divider/>
									<CardContent className={classes.cardAddContent}>
										<Chip
											size="small"
											label={post.keywords}
											className={classes.cardChip}
											disabled
										/>
									</CardContent>
									<Divider/>
									<CardContent className={classes.cardAddContent}>
										<Button size="small" color="primary">
											Детальніше
										</Button>
									</CardContent>
								</CardActionArea>
							</Card>
						</Link>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default EducationsList