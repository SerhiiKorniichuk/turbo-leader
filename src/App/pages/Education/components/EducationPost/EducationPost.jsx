import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEducationCurrentPost } from '../../../../../store/education/educationThunks'
import Banner from '../Banner/Banner'
import { Divider, makeStyles, Typography } from '@material-ui/core'
import moment from 'moment'


const useStyles = makeStyles((theme) => ({
	postContent: {
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			paddingLeft: theme.spacing(6),
			paddingRight: theme.spacing(6),
		},
		fontSize: '18px'
	},
	postDate: {
		marginBottom: '10px',
		display: 'block',
		fontSize: '14px'
	},
}))


const EducationPost = (props) => {

	const classes = useStyles()

	const { isLoading, currentEducationPost } = useSelector(state => state.education)
	const dispatch = useDispatch()

	const postId = props.match.params.postId

	useEffect(() => {
		dispatch(getEducationCurrentPost(postId))
	}, [dispatch, postId])

	const getPostContent = () => {
		return {__html: currentEducationPost.text}
	}

	if (isLoading) return <div />

	return (
		<>
			<Banner data={currentEducationPost} />
			<div className={classes.postContent}>
				<Typography component='span' color='textSecondary' className={classes.postDate}>
					{moment.parseZone(currentEducationPost.created).utc(true).format('LLL')}
				</Typography>
				<Divider />
				<div dangerouslySetInnerHTML={getPostContent()} />
			</div>
		</>
	)
}

export default EducationPost