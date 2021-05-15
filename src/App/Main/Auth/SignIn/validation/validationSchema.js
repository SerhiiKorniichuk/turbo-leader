import * as Yup from 'yup'


export const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Почта введена не вірно')
		.required(`Поле з поштою є обов'язковим`),
	password: Yup.string()
		.min(4, 'Мінімальная кількість сиволів: 4')
		.max(32, 'Максимальна кількість символів: 32')
		.required(`Поле з паролем є обов'язковим`),
})