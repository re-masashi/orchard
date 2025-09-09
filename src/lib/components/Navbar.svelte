<script>
	import { darkMode } from '$lib/stores/darkMode';
	import { browser } from '$app/environment';

	let mobileMenuOpen = false;
	let currentTheme = 'light';

	// Subscribe to dark mode changes
	if (browser) {
		darkMode.subscribe((value) => {
			currentTheme = value;
		});
	}

	const toggleMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	const toggleTheme = () => {
		darkMode.update((theme) => (theme === 'light' ? 'dark' : 'light'));
	};
</script>

<nav class="navbar sticky top-0 z-50 flex h-[9vh] items-center justify-between px-6 py-4 md:px-12">
	<a
		href="/"
		class="flex items-center text-xl font-black"
		style="color: rgb(var(--color-primary));"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="mr-2 h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			/>
		</svg>
		Orchard
	</a>

	<div class="hidden items-center space-x-8 md:flex">
		<a
			href="/projects"
			class="flex items-center rounded-full px-3 py-1 transition hover:opacity-75"
			style="background: rgba(var(--color-primary), 0.08);"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-1 h-4 w-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
				/>
			</svg>
			Projects
		</a>
		<a
			href="/posts"
			class="flex items-center rounded-full px-3 py-1 transition hover:opacity-75"
			style="background: rgba(var(--color-secondary), 0.08);"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-1 h-4 w-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
				/>
			</svg>
			Posts
		</a>
		<a
			href="/about"
			class="flex items-center rounded-full px-3 py-1 transition hover:opacity-75"
			style="background: rgba(var(--color-primary), 0.08);"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-1 h-4 w-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
				/>
			</svg>
			About
		</a>
	</div>

	<div class="flex items-center space-x-4">
		<button
			class="rounded-full p-2 md:hidden"
			style="background: rgba(var(--color-primary), 0.1);"
			on:click={toggleMenu}
			aria-label="mobile menu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
		<button
			class="rounded-full p-2 transition-colors duration-300"
			style="background: rgba(var(--color-primary), 0.1);"
			on:click={toggleTheme}
		>
			{#if currentTheme === 'light'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			{/if}
		</button>
	</div>
</nav>
{#if mobileMenuOpen}
	<div
		class="sticky top-[9vh] z-50 rounded-b-2xl px-6 py-4 shadow-lg backdrop-blur-xl md:hidden"
		style="background: rgba(var(--color-background), 0.3);"
	>
		<a
			href="/projects"
			class="mb-2 block flex items-center rounded-lg px-4 py-3"
			style="background: rgba(var(--color-primary), 0.08);"
			on:click={() => (mobileMenuOpen = false)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-2 h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
				/>
			</svg>
			Projects
		</a>
		<a
			href="/posts"
			class="mb-2 block flex items-center rounded-lg px-4 py-3"
			style="background: rgba(var(--color-secondary), 0.4);"
			on:click={() => (mobileMenuOpen = false)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-2 h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
				/>
			</svg>
			Posts
		</a>
		<a
			href="/media"
			class="mb-2 block flex items-center rounded-lg px-4 py-3"
			style="background: rgba(var(--color-accent), 0.4);"
			on:click={() => (mobileMenuOpen = false)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-2 h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
			Media
		</a>
	</div>
{/if}
