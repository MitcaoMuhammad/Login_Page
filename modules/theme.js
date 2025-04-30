export function initTheme(toggleLeft, toggleRight) {
	const savedTheme = localStorage.getItem('theme')
	if (savedTheme === 'dark') {
		document.body.classList.add('dark')
		toggleLeft.textContent = '☀️'
		toggleRight.textContent = '☀️'
	}

	const toggleTheme = () => {
		const isDark = document.body.classList.toggle('dark')
		localStorage.setItem('theme', isDark ? 'dark' : 'light')
		toggleLeft.textContent = isDark ? '☀️' : '🌙'
		toggleRight.textContent = isDark ? '☀️' : '🌙'
	}

	toggleLeft.addEventListener('click', toggleTheme)
	toggleRight.addEventListener('click', toggleTheme)
}
