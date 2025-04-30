export function validateName(input, errorElement, type = 'Firstname') {
	const value = input.value.trim()
	if (value === '') {
		errorElement.textContent = ''
		return
	}

	const startsWithUppercase = /^[A-Z]/.test(value)
	const restAreLowercase = /^[A-Z][a-z]{1,49}$/.test(value)
	const validLength = /^.{2,50}$/.test(value)

	let missing = []

	if (!startsWithUppercase) missing.push('start with an uppercase letter')
	if (!restAreLowercase) missing.push('rest should be lowercase letters only')
	if (!validLength) missing.push('it should be 2 to 50 characters long')

	if (missing.length === 0) {
		errorElement.textContent = ''
		errorElement.style.color = 'green'
	} else {
		errorElement.textContent = `${type} error: ${missing.join(', ')}.`
		errorElement.style.color = 'red'
	}
}
