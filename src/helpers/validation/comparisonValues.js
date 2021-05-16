export const comparisonValues = (mainObject, secondaryObject) => {

	let result = 0
	for (let item in secondaryObject) {
		if (secondaryObject.hasOwnProperty(item) && mainObject.hasOwnProperty(item)) {
			if (mainObject[getKeyByValue(mainObject, item)] !== secondaryObject[item]) {
				result++
			}
		}
	}

	function getKeyByValue(object, value) {
		let currentValue
		Object.keys(object).map(key => {
			if (key === value && key) {
				currentValue = key
			}
			return null
		})
		return currentValue
	}

	return Boolean(!result)
}