export function validateForm(fields, errors) {
	const [firstName, lastName, email, password, passwordConfirm] = fields
	const [
		firstNameError,
		lastNameError,
		emailError,
		passwordError,
		passwordConfirmError,
		signUpBtEnrror,
	] = errors

	let isValid = true

	if (firstName.value.trim() === '') {
		firstNameError.textContent = 'Firstname is required'
		firstNameError.style.color = 'red'
		isValid = false
	} else if (lastName.value.trim() === '') {
		lastNameError.textContent = 'Lastname is required'
		lastNameError.style.color = 'red'
		isValid = false
	} else if (email.value.trim() === '') {
		emailError.textContent = 'Email is required'
		emailError.style.color = 'red'
		isValid = false
	} else if (password.value.trim() === '') {
		passwordError.textContent = 'Password is required'
		passwordError.style.color = 'red'
		isValid = false
	} else if (passwordConfirm.value.trim() === '') {
		passwordConfirmError.textContent = 'Password confirmation is required'
		passwordConfirmError.style.color = 'red'
		isValid = false
	}
	if (password.value.trim() !== passwordConfirm.value.trim()) {
		passwordConfirmError.textContent = 'Passwords do not match'
		passwordConfirmError.style.color = 'red'
		isValid = false
	}
	if (
		firstNameError.textContent.length !== 0 &&
		lastNameError.textContent.length !== 0 &&
		emailError.textContent.length !== 0 &&
		passwordError.textContent.length !== 0 &&
		passwordConfirmError.textContent.length !== 0
	) {
		signUpBtEnrror.textContent = 'Fill them all correctly'
	} else {
		signUpBtEnrror.textContent = ''
	}
	return isValid
}
