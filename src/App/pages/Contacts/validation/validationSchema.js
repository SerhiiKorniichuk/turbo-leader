import * as Yup from 'yup'


export const validationSchema = Yup.object().shape({
	comment: Yup.string()
		.max(255, 'Максимальна кількість символів: 255')
})