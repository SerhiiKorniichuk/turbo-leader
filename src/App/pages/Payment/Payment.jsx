import {
	Button, Card, CardActions,
	CardContent, CardHeader, Container, Divider,
	Grid, makeStyles, Snackbar, Typography
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { sendPayment } from '../../../store/payment/paymentThunks'
import Alert from '@material-ui/lab/Alert'
import React, { useEffect, useState } from 'react'
import { setPaymentData } from '../../../store/payment/paymentActions'


const useStyles = makeStyles((theme) => ({
	'@global': {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: 'none'
		}
	},
	link: {
		margin: theme.spacing(1, 1.5)
	},
	heroContent: {
		padding: theme.spacing(6, 0, 6)
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]
	},
	cardPricing: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.spacing(2)
	},
	cardAddText: {
		margin: '10px 0',
		fontSize: '20px',
	},
	cardPeriod: {
		margin: '0 5px'
	},
	cardDescription: {
		margin: '10px 0',
		fontSize: '12px'
	}
}))

const tiers = [
	{
		title: 'Базовий',
		price: '~ 275',
		period: 1,
		addText: '9,90$ / 1 місяць',
		description: ['Повний доступ на 1 місяць'],
		buttonText: 'Активувати',
		buttonVariant: 'contained',
	},
	{
		title: 'Макимальний',
		subheader: 'Найбільш популярний',
		price: '~ 2 199',
		period: 12,
		addText: '79,90$ / 12 місяців',
		description: ['Повний доступ на 12 місяців'],
		buttonText: 'Активувати',
		buttonVariant: 'contained',
	},
	{
		title: 'Стандартний',
		price: '~ 1 249',
		period: 6,
		addText: '44,90$ / 6 місяців',
		description: ['Повний доступ на 6 місяців'],
		buttonText: 'Активувати',
		buttonVariant: 'contained',
	},
]


const Payment = (props) => {

	const classes = useStyles()

	const { message } = useSelector(state => state.payment)
	const dispatch = useDispatch()

	const [snackbarView, setSnackbarView] = useState(false)

	useEffect(() => {
		if (message) {
			openSnackbar()
		}
	}, [message])

	const openSnackbar = () => setSnackbarView(true)

	const closeSnackbar = () => {
		setSnackbarView(false)
		setTimeout(() => {
			dispatch(setPaymentData({ message: '' }))
		}, 500)
	}

	const onClickPaymentButton = (period) => {
		dispatch(sendPayment({ end_time: period }))
	}

	return (
		<>
			<Container maxWidth="sm" component="main" className={classes.heroContent}>
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					Тарифи
				</Typography>
				<Typography variant="h5" align="center" color="textSecondary" component="p">
					Quickly build an effective pricing table for your potential customers with this layout.
					It&apos;s built with default Material-UI components with little customization.
				</Typography>
			</Container>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end" justify={'center'}>
					{tiers.map((tier) => (
						<Grid item key={tier.title} xs={12} sm={12} md={7} lg={4}>
							<Card>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: 'center' }}
									subheaderTypographyProps={{ align: 'center' }}
									className={classes.cardHeader}
								/>
								<CardContent>
									<div className={classes.cardPricing}>
										<Typography component="h2" variant="h4" color="textPrimary">
											{tier.price}₴
										</Typography>
										<Typography variant="h6" color="textSecondary" className={classes.cardPeriod}>
											/ {tier.period} міс.
										</Typography>
									</div>
									<Divider />
									<Typography
										component="p"
										variant="h1"
										align="center"
										className={classes.cardAddText}
									>
										{tier.addText}
									</Typography>
									<Divider />
									<Typography
										component="p"
										variant="subtitle1"
										align="center"
										className={classes.cardDescription}
									>
										{tier.description}
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										fullWidth
										variant={tier.buttonVariant}
										color="primary"
										onClick={() => onClickPaymentButton(tier.period)}
									>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
					open={snackbarView}
				  	autoHideDuration={3000}
					onClose={closeSnackbar}
				>
					<Alert severity="success">
						{ message }
					</Alert>
				</Snackbar>
			</Container>
		</>
	)
}

export default Payment