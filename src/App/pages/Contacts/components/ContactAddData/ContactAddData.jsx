import React from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { editDefaultContact, editLendingContact } from '../../../../../store/contacts/contactsThunks'
import { comparisonValues } from '../../../../../helpers/validation/comparisonValues'
import { checkFormikFieldsValid } from '../../../../../helpers/validation/checkFieldsValid'
import { validationSchema } from '../../validation/validationSchema'


const useStyles = makeStyles((theme) => ({
	root: {},
	commentBlock: {
		display: 'flex',
		alignItems: 'center'
	},
	submitButton: {
		marginLeft: theme.spacing(2)
	}
}))


export const ContactAddData = (props) => {

	const classes = useStyles()

	const {is_loading} = useSelector(state => state.auth)
	const contactsData = useSelector(state => state.contacts)
	const dispatch = useDispatch()

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			comment: props.comment || ''
		},
		validationSchema,
		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: values => {
			if (props.type === 'default') {
				dispatch(editDefaultContact(props.contactId, values))
			} else if (props.type === 'lending') {
				dispatch(editLendingContact(props.contactId, values))
			}
		}
	})

	const {errors, values, handleChange, handleSubmit} = formik

	const isLoading = is_loading || contactsData.is_loading
	const isDisabled = comparisonValues({ comment: props.comment }, values) || checkFormikFieldsValid(errors, false) || isLoading

	return (
		<form className={classes.root} noValidate onSubmit={handleSubmit}>
			<div className={classes.commentBlock}>
				<TextField
					margin='normal'
					fullWidth
					name='comment'
					label='Нотатки'
					type='comment'
					id='comment'
					value={values.comment}
					onChange={handleChange}
					InputLabelProps={{ shrink: true }}
					disabled={isLoading}
					helperText={errors.comment && errors.comment}
				/>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					className={classes.submitButton}
					disabled={isDisabled}
				>
					Зберегти
				</Button>
			</div>
		</form>
	)
}
