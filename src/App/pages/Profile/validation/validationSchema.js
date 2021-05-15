import * as Yup from 'yup'


export const validationSchema = Yup.object().shape({
	first_name: Yup.string()
		.min(4, 'Мінімальная кількість сиволів: 4')
		.max(32, 'Максимальна кількість символів: 32')
		.required(`Поле є обов'язковим`),
	last_name: Yup.string()
		.min(4, 'Мінімальная кількість сиволів: 4')
		.max(32, 'Максимальна кількість символів: 32')
		.required(`Поле є обов'язковим`),
	email: Yup.string()
		.email('Почта введена не вірно')
		.required(`Поле є обов'язковим`),
	bio: Yup.string()
		.min(4, 'Мінімальная кількість сиволів: 4')
		.max(2000, 'Максимальна кількість символів: 2000')
		.required(`Поле є обов'язковим`),
	gender: Yup.string()
		.required(`Поле є обов'язковим`),
	referral_link: Yup.string()
		.url('Введіть корректне посилання. Приклад: https://example.com')
		.required(),
	vk_link: Yup.string()
		.url('Введіть корректне посилання. Приклад: https://example.com')
		.required(),
	fb_link: Yup.string()
		.url('Введіть корректне посилання. Приклад: https://example.com')
		.required(),
	inst_link: Yup.string()
		.url('Введіть корректне посилання. Приклад: https://example.com')
		.required(),
	tg_link: Yup.string()
		.min(4, 'Мінімальная кількість сиволів: 4')
		.max(200, 'Максимальна кількість символів: 200')
		.required(`Поле є обов'язковим`),
	wt_link: Yup.string()
		.min(4, 'Мінімальная кількість сиволів: 4')
		.max(200, 'Максимальна кількість символів: 200')
		.required(`Поле є обов'язковим`),
})