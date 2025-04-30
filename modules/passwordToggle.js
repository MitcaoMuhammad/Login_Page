export function togglePasswordVisibility(input, toggleButton) {
	if (input.type === 'password') {
		input.type = 'text'
		toggleButton.innerHTML = '<i class="far fa-eye"></i>'
	} else {
		input.type = 'password'
		toggleButton.innerHTML = '<i class="far fa-eye-slash"></i>'
	}
}
