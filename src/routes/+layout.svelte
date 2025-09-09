<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { darkMode } from '$lib/stores/darkMode';
	import { browser } from '$app/environment';
	import '../app.css';
	import '../hl.css';

	// Initialize theme on load
	if (browser) {
		// Apply theme immediately to prevent flash of unstyled content
		const savedTheme = localStorage.getItem('theme');
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
		const initialTheme = savedTheme || systemTheme;

		if (initialTheme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<div class="flex min-h-screen flex-col transition-colors duration-300">
	<Navbar />
	<main class="flex-grow">
		<div class="floating-gradients">
			<div class="gradient-orb orb-1"></div>
			<div class="gradient-orb orb-2"></div>
			<div class="gradient-orb orb-3"></div>
			<div class="gradient-orb orb-4"></div>
			<div class="gradient-orb orb-5"></div>
		</div>
		<slot />
	</main>
</div>

<style>
	.floating-gradients {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
		z-index: -1;
	}

	.gradient-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(60px);
		opacity: 0.4;
		animation-duration: 5s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}

	.orb-1 {
		width: 300px;
		height: 300px;
		background: radial-gradient(circle, rgb(var(--color-primary)) 0%, transparent 70%);
		top: 10%;
		left: 10%;
		animation-name: float1;
	}

	.orb-2 {
		width: 200px;
		height: 200px;
		background: radial-gradient(circle, rgb(var(--color-secondary)) 0%, transparent 70%);
		top: 60%;
		right: 20%;
		animation-name: float2;
		animation-delay: -5s;
	}

	.orb-3 {
		width: 250px;
		height: 250px;
		background: radial-gradient(circle, rgb(var(--color-accent)) 0%, transparent 70%);
		bottom: 20%;
		left: 30%;
		animation-name: float3;
		animation-delay: -10s;
	}

	.orb-4 {
		width: 180px;
		height: 180px;
		background: radial-gradient(circle, rgb(var(--color-primary)) 0%, transparent 70%);
		top: 30%;
		right: 10%;
		animation-name: float4;
		animation-delay: -15s;
	}

	.orb-5 {
		width: 220px;
		height: 220px;
		background: radial-gradient(circle, rgb(var(--color-secondary)) 0%, transparent 70%);
		top: 80%;
		left: 60%;
		animation-name: float5;
		animation-delay: -7s;
	}

	@keyframes float1 {
		0%,
		100% {
			transform: translate(0px, 0px) rotate(0deg);
		}
		33% {
			transform: translate(30px, -30px) rotate(120deg);
		}
		66% {
			transform: translate(-20px, 20px) rotate(240deg);
		}
	}

	@keyframes float2 {
		0%,
		100% {
			transform: translate(0px, 0px) rotate(0deg);
		}
		33% {
			transform: translate(-40px, -20px) rotate(-120deg);
		}
		66% {
			transform: translate(20px, -40px) rotate(-240deg);
		}
	}

	@keyframes float3 {
		0%,
		100% {
			transform: translate(0px, 0px) rotate(0deg);
		}
		33% {
			transform: translate(25px, 35px) rotate(90deg);
		}
		66% {
			transform: translate(-35px, -25px) rotate(180deg);
		}
	}

	@keyframes float4 {
		0%,
		100% {
			transform: translate(0px, 0px) rotate(0deg);
		}
		33% {
			transform: translate(-30px, 25px) rotate(-90deg);
		}
		66% {
			transform: translate(40px, -15px) rotate(-180deg);
		}
	}

	@keyframes float5 {
		0%,
		100% {
			transform: translate(0px, 0px) rotate(0deg);
		}
		33% {
			transform: translate(15px, -40px) rotate(60deg);
		}
		66% {
			transform: translate(-25px, 30px) rotate(-60deg);
		}
	}

	.dark .gradient-orb {
		opacity: 0.2;
	}

	@media (max-width: 768px) {
		.gradient-orb {
			filter: blur(40px);
		}

		.orb-1,
		.orb-2,
		.orb-3 {
			width: 200px;
			height: 200px;
		}

		.orb-4,
		.orb-5 {
			width: 150px;
			height: 150px;
		}
	}
</style>
