import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, Typography, Divider, Link as MaterialLink } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
	},
	listItem: {
		paddingLeft: 2,
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	addText: {
		display: 'block',
		fontSize: 12,
		fontWeight: 700
	},
	mainText: {
		display: 'block'
	}
}))


export const ContactMainData = (props) => {

	const classes = useStyles()

	return (
		<List className={classes.root}>
			{ props.name &&
				<>
					<ListItem className={classes.listItem}>
						<Typography color='primary' className={classes.addText}>
							Ім`я
						</Typography>
						<Typography className={classes.mainText}>
							{props.name}
						</Typography>
					</ListItem>
					<Divider component="li" />
				</>
			}
			{ props.siteUrl &&
				<>
					<ListItem className={classes.listItem}>
						<Typography color='primary' className={classes.addText}>
							Посилання на сайт
						</Typography>
						<Typography className={classes.mainText}>
							<MaterialLink href={props.siteUrl} target='_blank'>
								{props.siteUrl}
							</MaterialLink>
						</Typography>
					</ListItem>
					<Divider component="li" />
				</>
			}
			{ props.username &&
				<>
					<ListItem className={classes.listItem}>
						<Typography color='primary' className={classes.addText}>
							Нікнейм
						</Typography>
						<Typography className={classes.mainText}>
							{props.username}
						</Typography>
					</ListItem>
					<Divider component="li" />
				</>
			}
			{ (props.firstName && props.lastName) &&
				<>
					<ListItem className={classes.listItem}>
						<Typography color='primary' className={classes.addText}>
							Ім`я та прізвище
						</Typography>
						<Typography className={classes.mainText}>
							{props.firstName} {props.lastName}
						</Typography>
					</ListItem>
					<Divider component="li" />
				</>
			}
			{ props.email &&
				<>
					<ListItem className={classes.listItem}>
						<Typography color='primary' className={classes.addText}>
							Почта
						</Typography>
						<Typography className={classes.mainText}>
							{props.email}
						</Typography>
					</ListItem>
				</>
			}
			{ props.numberPhone &&
				<>
					<Divider component="li" />
					<ListItem className={classes.listItem}>
						<Typography color='primary' className={classes.addText}>
							Телефон
						</Typography>
						<Typography className={classes.mainText}>
							{props.numberPhone}
						</Typography>
					</ListItem>
				</>
			}
		</List>
	)
}