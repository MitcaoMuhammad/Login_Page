const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login')
const passwordInput = document.getElementById('password')
const togglePassword = document.getElementById('togglePassword')
const passwordConfirm = document.getElementById('passwordConfirm')
const togglePasswordConfirm = document.getElementById('togglePasswordConfirm')
const SignInpasswordInput = document.getElementById('Sign_In_password')
const SignIntogglePassword = document.getElementById('Sign_In_togglePassword')
const feedback = document.getElementById('password-feedback')
const darkModeToggleLeft = document.getElementById('themeToggleBtnleft')
const darkModeToggleRight = document.getElementById('themeToggleBtnright')
const firstNameInput = document.getElementById('firstname')
const lastNameInput = document.getElementById('lastname')
const emailInput = document.getElementById('email')
const signInEmailInput = document.getElementById('emailSignIn')
const signUpButton = document.getElementById('signUpBtn')

const firstNameError = document.getElementById('firstname-error')
const lastNameError = document.getElementById('lastname-error')
const emailError = document.getElementById('email-error')
const signInEmailError = document.getElementById('email-error-Sign-In')
const passwordError = document.getElementById('password-feedback')
const passwordConfirmError = document.getElementById('passwordConfirm-error')

if (firstNameInput) {
	firstNameInput.addEventListener('input', function () {
		const value = firstNameInput.value.trim()
		if (value === '') {
			firstNameError.textContent = ''
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
			firstNameError.textContent = ''
			firstNameError.style.color = 'green'
		} else {
			firstNameError.textContent =
				'Firstname error: ' + missing.join(', ') + '.'
			firstNameError.style.color = 'red'
		}
	})
}

if (lastNameInput) {
	lastNameInput.addEventListener('input', function () {
		const value = lastNameInput.value.trim()
		if (value === '') {
			lastNameError.textContent = ''
			return
		}

		const startsWithUppercase = /^[A-Z]/.test(value)
		const restAreLowercase = /^[A-Z][a-z]{1,59}$/.test(value)
		const validLength = /^.{2,50}$/.test(value)

		let missing = []

		if (!startsWithUppercase) missing.push('start with an uppercase letter')
		if (!restAreLowercase) missing.push('rest should be lowercase letters only')
		if (!validLength) missing.push('it should be 2 to 50 characters long')

		if (missing.length === 0) {
			lastNameError.textContent = ''
			lastNameError.style.color = 'green'
		} else {
			lastNameError.textContent = 'Lastname error: ' + missing.join(', ') + '.'
			lastNameError.style.color = 'red'
		}
	})
}

if (emailInput) {
	emailInput.addEventListener('input', function () {
		const value = emailInput.value.trim()
		if (value === '') {
			emailError.textContent = ''
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
			emailError.textContent = ''
			emailError.style.color = 'green'
		} else {
			emailError.textContent = 'Email error: ' + missing.join(', ') + '.'
			emailError.style.color = 'red'
		}
	})
}

if (signInEmailInput) {
	signInEmailInput.addEventListener('input', function () {
		const value = signInEmailInput.value.trim()
		if (value === '') {
			signInEmailError.textContent = ''
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
			signInEmailError.textContent = ''
			signInEmailError.style.color = 'green'
		} else {
			signInEmailError.textContent = 'Email error: ' + missing.join(', ') + '.'
			signInEmailError.style.color = 'red'
		}
	})
}

if (passwordInput) {
	passwordInput.addEventListener('input', function () {
		const value = passwordInput.value

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
			passwordError.textContent = ''
		} else {
			passwordError.textContent =
				'Password missing: ' + missing.join(', ') + ' it should.'
			passwordError.style.color = 'red'
		}
	})
}

signUpButton.addEventListener('click', function (e) {
	const firstName = firstNameInput.value
	const lastName = lastNameInput.value
	const email = emailInput.value
	const password = passwordInput.value
	const passwordConfirmValue = passwordConfirm.value

	if (firstName === '') {
		firstNameError.textContent = 'Firstname is required'
		firstNameError.style.color = 'red'
		e.preventDefault()
		return
	} else if (lastName === '') {
		lastNameError.textContent = 'Lastname is required'
		lastNameError.style.color = 'red'
		e.preventDefault()
		return
	} else if (email === '') {
		emailError.textContent = 'Lastname is required'
		emailError.style.color = 'red'
		e.preventDefault()
		return
	} else if (password === '') {
		passwordError.textContent = 'Password is required'
		passwordError.style.color = 'red'
		e.preventDefault()
		return
	} else if (passwordConfirmValue === '') {
		passwordConfirmError.textContent = 'Password confirmation is required'
		passwordConfirmError.style.color = 'red'
		e.preventDefault()
		return
	}
	if (password !== passwordConfirmValue) {
		passwordConfirmError.textContent = 'Passwords do not match'
		passwordConfirmError.style.color = 'red'
		e.preventDefault()
		return
	} else {
		passwordConfirmError.textContent = ''
	}

	alert(
		`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`
	)
})

registerBtn.addEventListener('click', function () {
	container.classList.add('active')
})

loginBtn.addEventListener('click', function () {
	container.classList.remove('active')
})

function togglePasswordVisibility(input, toggleButton) {
	if (input.type === 'password') {
		input.type = 'text'
		toggleButton.innerHTML = '<i class="far fa-eye"></i>'
	} else {
		input.type = 'password'
		toggleButton.innerHTML = '<i class="far fa-eye-slash"></i>'
	}
}

if (togglePassword) {
	togglePassword.addEventListener('click', function () {
		togglePasswordVisibility(passwordInput, togglePassword)
	})
}

if (togglePasswordConfirm) {
	togglePasswordConfirm.addEventListener('click', function () {
		togglePasswordVisibility(passwordConfirm, togglePasswordConfirm)
	})
}

if (SignIntogglePassword) {
	SignIntogglePassword.addEventListener('click', function () {
		togglePasswordVisibility(SignInpasswordInput, SignIntogglePassword)
	})
}

window.addEventListener('load', function () {
	const passwordFields = ['password', 'passwordConfirm', 'Sign_In_password']

	passwordFields.forEach(function (id) {
		const input = document.getElementById(id)
		if (input) {
			input.value = ''
		}
	})
})

window.addEventListener('DOMContentLoaded', function () {
	const savedTheme = localStorage.getItem('theme')
	if (savedTheme === 'dark') {
		document.body.classList.add('dark')
		darkModeToggleLeft.textContent = '☀️'
		darkModeToggleRight.textContent = '☀️'
	}
})

darkModeToggleLeft.addEventListener('click', function () {
	const isDark = document.body.classList.toggle('dark')
	localStorage.setItem('theme', isDark ? 'dark' : 'light')

	darkModeToggleLeft.textContent = isDark ? '☀️' : '🌙'
	darkModeToggleRight.textContent = isDark ? '☀️' : '🌙'
})

darkModeToggleRight.addEventListener('click', function () {
	const isDark = document.body.classList.toggle('dark')
	localStorage.setItem('theme', isDark ? 'dark' : 'light')

	darkModeToggleLeft.textContent = isDark ? '☀️' : '🌙'
	darkModeToggleRight.textContent = isDark ? '☀️' : '🌙'
})
