// src/lib/stores/darkMode.js
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Get initial theme from localStorage or system preference
const getInitialTheme = () => {
	if (!browser) return 'light';

	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) return savedTheme;

	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Create the store
export const darkMode = writable(getInitialTheme());

// Apply theme to document
export const applyTheme = (theme) => {
	if (!browser) return;

	if (theme === 'dark') {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
	localStorage.setItem('theme', theme);
};

// Initialize theme on load
if (browser) {
	// Apply initial theme immediately
	darkMode.subscribe(applyTheme);

	// Listen for system preference changes
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	const handleSystemThemeChange = (e) => {
		// Only change if user hasn't explicitly set a preference
		if (!localStorage.getItem('theme')) {
			const newTheme = e.matches ? 'dark' : 'light';
			darkMode.set(newTheme);
		}
	};

	mediaQuery.addEventListener('change', handleSystemThemeChange);
}
