export function validatePassword(input, errorElement) {
	const value = input.value
	const hasLength = value.length >= 8
	const hasUppercase = /[A-Z]/.test(value)
	const hasLowercase = /[a-z]/.test(value)
	const hasNumber = /[0-9]/.test(value)
	const hasSpecial = /[!@#$%^&*]/.test(value)

	let missing = []

	if (!hasLength) missing.push('at least 8 characters')
	if (!hasUppercase) missing.push('upper case')
	if (!hasLowercase) missing.push('lower case')
	if (!hasNumber) missing.push('number')
	if (!hasSpecial) missing.push('special character')

	if (missing.length === 0) {
		errorElement.textContent = ''
	} else {
		errorElement.textContent =
			'Password missing: ' + missing.join(', ') + ' it should.'
		errorElement.style.color = 'red'
	}
}
