export function validateEmail(input, errorElement) {
	const value = input.value.trim()
	if (value === '') {
		errorElement.textContent = ''
		return
	}

	const hasAtSymbol = /@/.test(value)
	const hasDot = /\./.test(value)
	const endsWithSpecialChar = /[!#$%^&*(),?":{}|<>]$/.test(value)
	let missing = []

	if (!hasAtSymbol) missing.push('should contain "@" symbol')
	if (!hasDot) missing.push('should contain "." symbol')
	if (endsWithSpecialChar)
		missing.push('should not end with a special character')

	if (missing.length === 0) {
		errorElement.textContent = ''
		errorElement.style.color = 'green'
	} else {
		errorElement.textContent = 'Email error: ' + missing.join(', ') + '.'
		errorElement.style.color = 'red'
	}
}
