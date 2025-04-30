import { validateName } from './modules/nameValidation.js'
import { validateEmail } from './modules/emailValidation.js'
import { validatePassword } from './modules/passwordValidation.js'
import { validateForm } from './modules/formValidation.js'
import { togglePasswordVisibility } from './modules/passwordToggle.js'
import { initTheme } from './modules/theme.js'

const firstNameInput = document.getElementById('firstname')
const lastNameInput = document.getElementById('lastname')
const emailInput = document.getElementById('email')
const signInEmailInput = document.getElementById('emailSignIn')
const signUpButton = document.getElementById('signUpBtn')
const passwordInput = document.getElementById('password')
const passwordConfirm = document.getElementById('passwordConfirm')
const firstNameError = document.getElementById('firstname-error')
const lastNameError = document.getElementById('lastname-error')
const emailError = document.getElementById('email-error')
const signInEmailError = document.getElementById('email-error-Sign-In')
const passwordError = document.getElementById('password-feedback')
const passwordConfirmError = document.getElementById('passwordConfirm-error')
const togglePassword = document.getElementById('togglePassword')
const togglePasswordConfirm = document.getElementById('togglePasswordConfirm')
const darkModeToggleLeft = document.getElementById('themeToggleBtnleft')
const darkModeToggleRight = document.getElementById('themeToggleBtnright')
const signUpBtnError = document.getElementById('signUpBtn-error')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login')

registerBtn.addEventListener('click', function () {
	container.classList.add('active')
})

loginBtn.addEventListener('click', function () {
	container.classList.remove('active')
})

firstNameInput?.addEventListener('input', () =>
	validateName(firstNameInput, firstNameError, 'Firstname')
)
lastNameInput?.addEventListener('input', () =>
	validateName(lastNameInput, lastNameError, 'Lastname')
)
emailInput?.addEventListener('input', () =>
	validateEmail(emailInput, emailError)
)
signInEmailInput?.addEventListener('input', () =>
	validateEmail(signInEmailInput, signInEmailError)
)
passwordInput?.addEventListener('input', () =>
	validatePassword(passwordInput, passwordError)
)

signUpButton?.addEventListener('click', function (e) {
	if (
		!validateForm(
			[
				firstNameInput,
				lastNameInput,
				emailInput,
				passwordInput,
				passwordConfirm,
			],
			[
				firstNameError,
				lastNameError,
				emailError,
				passwordError,
				passwordConfirmError,
				signUpBtnError,
			]
		)
	) {
		e.preventDefault()
	}
})

togglePassword?.addEventListener('click', () =>
	togglePasswordVisibility(passwordInput, togglePassword)
)
togglePasswordConfirm?.addEventListener('click', () =>
	togglePasswordVisibility(passwordConfirm, togglePasswordConfirm)
)

initTheme(darkModeToggleLeft, darkModeToggleRight)
