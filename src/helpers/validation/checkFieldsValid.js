export const checkFormikFieldsValid = (errors, values) => {

	let errorsArray = []
	for (let item in errors) {
		if (errors.hasOwnProperty(item)) {
			errorsArray.push(item)
		}
	}

	let valuesArray = []
	for (let item in values) {
		if (values.hasOwnProperty(item)) {
			if (values[item]) {
				valuesArray.push(item)
			}
		}
	}

	return Boolean(errorsArray.length || !valuesArray.length)
}