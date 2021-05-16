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

	if (values === false) {
		return Boolean(errorsArray.length)
	}

	return Boolean(errorsArray.length || !valuesArray.length)
}