<script>
	// You can customize these details
	const personalInfo = {
		name: 'Masashi',
		role: ''
	};

	const dailySetup = {
		hardware: [
			{
				name: 'HP ProBook 430 G2',
				nickname: '',
				description: 'Main development machine',
				longDescription:
					"This trusty laptop has been with me through countless coding sessions. It's not the newest, but it runs Arch Linux like a dream and has never let me down. The keyboard is perfect for long typing sessions.",
				image: '/media/hardware/hp-probook.jpg',
				specs: {
					cpu: 'Intel Core i5-4200U',
					ram: '8GB DDR3',
					storage: '512GB SSD',
					year: '2014'
				},
				status: 'Primary',
				batteryLife: '6+ hours',
				favoriteFeature: 'Excellent keyboard for coding'
			},
			{
				name: 'Lenovo ThinkPad T410',
				nickname: '',
				description: 'Spare machine',
				longDescription:
					'A classic ThinkPad that refuses to die! This machine is built like a tank and still runs beautifully. Perfect for when I need a second screen or want to experiment with different Linux distros.',
				image: '/media/hardware/thinkpad-t410.jpg',
				specs: {
					cpu: 'Intel Core i5-520M',
					ram: '4GB DDR3',
					storage: '320GB HDD',
					year: '2010'
				},
				personality: '🏰',
				status: 'Backup',
				batteryLife: '4 hours',
				favoriteFeature: 'Legendary ThinkPad durability'
			}
		],
		software: [
			{
				name: 'Arch Linux',
				description: 'on both devices',
				longDescription:
					'A lightweight, flexible Linux distribution that follows the KISS principle. I love the control and minimalism it provides, plus the amazing AUR package manager.',
				image: '/media/software/arch-linux.png',
				category: 'OS'
			},
			{
				name: 'Hyprland',
				description: 'Dynamic tiling Wayland compositor',
				longDescription:
					'A beautiful, dynamic tiling Wayland compositor with smooth animations and excellent customization options. Perfect for a productive workflow.',
				image: '/media/software/hyprland.png',
				category: 'WM'
			},
			{
				name: 'Sublime Text',
				description: 'Ayu Dark theme + some extensions',
				longDescription:
					'My go-to text editor with the beautiful Ayu Dark theme. Lightning fast, great for quick edits and has amazing package support.',
				image: '/media/software/sublime.jpg',
				category: 'Editor'
			},
			{
				name: 'Kitty',
				description: 'Terminal',
				longDescription:
					'A fast, feature-rich, GPU-based terminal emulator. Great font rendering, ligature support, and excellent performance.',
				image: '/media/software/kitty.png',
				category: 'Terminal'
			},
			{
				name: 'Firefox',
				description: 'Privacy-focused browser',
				longDescription:
					'My main browser with extensive privacy tweaks and custom CSS. Fast, secure, and respects user privacy.',
				image: '/media/software/firefox.png',
				category: 'Browser'
			},
			{
				name: 'Apple Music',
				description: 'Music streaming',
				longDescription:
					'For all my coding sessions and daily music needs. Great integration across devices and excellent music discovery.',
				image: '/media/software/apple-music.png',
				category: 'Music'
			}
		]
	};

	const techStack = {
		frontend: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'MDsveX'],
		tools: ['Git', 'Vercel', 'pnpm'],
		learning: ['Rust', 'Go', 'Three.js', 'WebGL']
	};

	const interests = [
		{ name: 'Digital Gardens', icon: '', description: 'Growing ideas organically' },
		{ name: 'Cozy Computing', icon: '', description: 'Making tech feel human' },
		{ name: 'Minimalist Design', icon: '', description: 'Less is more philosophy' },
		{ name: 'Open Source', icon: '', description: 'Building in public' }
	];

	// Modal state
	let selectedSoftware = null;
	let showModal = false;

	function openModal(software) {
		selectedSoftware = software;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		selectedSoftware = null;
	}
</script>

<svelte:head>
	<title>About - Orchard</title>
	<meta
		name="description"
		content="Learn more about me, my setup, and what drives my passion for creating cozy digital experiences."
	/>
</svelte:head>

<div class="min-h-screen">
	<section class="relative overflow-hidden px-6 py-12 pb-12 md:px-12 md:py-20 md:pb-0">
		<div class="decorative-corner corner-top-right"></div>

		<div class="mx-auto max-w-4xl">
			<div class="mb-12 text-center">
				<div
					class="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 shadow-xl"
					style="border-color: rgba(var(--color-primary), 0.3);"
				>
					<div
						class="flex h-full w-full items-center justify-center text-4xl"
						style="background: linear-gradient(135deg, rgb(var(--color-primary)) 0%, rgb(var(--color-secondary)) 100%);"
					></div>
				</div>

				<h1 class="mb-2 text-4xl font-bold md:text-5xl">
					I'm <span style="color: rgb(var(--color-primary));">{personalInfo.name}</span>
				</h1>
				<p class="mb-2 text-xl opacity-90">{personalInfo.role}</p>
				<p class="mb-8 text-lg opacity-75">{personalInfo.location}</p>
				<p class="mx-auto max-w-2xl text-lg leading-relaxed opacity-90">
					{personalInfo.bio}
				</p>
			</div>
		</div>
	</section>

	<section class="px-6 py-16 md:px-12">
		<div class="mx-auto max-w-6xl">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-3xl font-bold">Daily Driving Setup</h2>
			</div>

			<div class="grid gap-12 md:grid-cols-2">
				<div class="card p-8">
					<h3
						class="mb-6 flex items-center text-2xl font-semibold"
						style="color: rgb(var(--color-primary));"
					>
						Hardware
					</h3>

					<div class="flex flex-col space-y-4 md:hidden">
						{#each dailySetup.hardware as item}
							<button class=" group cursor-pointer">
								<div
									class="flex items-start space-x-4 rounded-xl p-4 transition-all duration-300 hover:scale-105"
									style="background: rgba(var(--color-primary), 0.05);"
								>
									<div class="min-w-0 flex-1">
										<div class="mb-1 flex items-center gap-2">
											<h4 class="truncate text-lg font-semibold">{item.name}</h4>
											<span
												class="ml-auto inline-block rounded-full px-2 py-0.5 text-xs font-medium"
												style="background: rgba(var(--color-primary), 0.2); color: rgb(var(--color-primary));"
											>
												{item.status}
											</span>
										</div>
										<p class="mb-1 text-start text-sm font-medium opacity-80">{item.nickname}</p>
										<p class="text-start text-sm opacity-70">{item.description}</p>
									</div>
								</div>
							</button>
						{/each}
					</div>

					<div class="hidden flex-col gap-6 md:flex">
						{#each dailySetup.hardware as item}
							<div class="hardware-card group cursor-pointer">
								<div
									class="rounded-2xl p-4 pb-1 transition-all duration-300 hover:scale-105 hover:shadow-xl"
									style="background: rgba(var(--color-background), 0.5);"
								>
									<div class="mb-4">
										<h4
											class="mb-1 flex w-full flex-row text-lg font-bold transition-colors group-hover:text-pink-600 dark:group-hover:text-pink-400"
										>
											<p>{item.name}</p>
											<span
												class="ml-auto rounded-full px-3 py-1 text-xs font-semibold"
												style="background: rgba(var(--color-primary), 0.1); color: rgb(var(--color-primary));"
											>
												{item.status}
											</span>
										</h4>
										<p class="mb-2 text-sm font-medium opacity-80">{item.nickname}</p>
										<p class="line-clamp-2 text-sm opacity-70">{item.description}</p>
									</div>

									<!-- <div class="space-y-2">
                    {#if item.specs.cpu}
                      <div class="flex justify-between text-sm">
                        <span class="opacity-70">CPU:</span>
                        <span class="font-medium">{item.specs.cpu}</span>
                      </div>
                    {/if}
                    {#if item.specs.ram}
                      <div class="flex justify-between text-sm">
                        <span class="opacity-70">RAM:</span>
                        <span class="font-medium">{item.specs.ram}</span>
                      </div>
                    {/if}
                    {#if item.batteryLife}
                      <div class="flex justify-between text-sm">
                        <span class="opacity-70">Battery:</span>
                        <span class="font-medium">{item.batteryLife}</span>
                      </div>
                    {/if}
                    {#if item.specs.type}
                      <div class="flex justify-between text-sm">
                        <span class="opacity-70">Type:</span>
                        <span class="font-medium">{item.specs.type}</span>
                      </div>
                    {/if}
                  </div> -->
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div class="card p-8">
					<h3
						class="mb-6 flex items-center text-2xl font-semibold"
						style="color: rgb(var(--color-secondary));"
					>
						Software
					</h3>

					<div class="space-y-4 md:hidden">
						{#each dailySetup.software as item}
							<div
								class="flex cursor-pointer items-center space-x-4 rounded-xl p-4 transition-all duration-200 hover:scale-105"
								style="background: rgba(var(--color-secondary), 0.05);"
								on:click={() => openModal(item)}
							>
								<div class="h-10 w-10">
									<img
										src={item.image}
										alt={item.name}
										class="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
									/>
								</div>
								<div>
									<h4 class="text-lg font-semibold">{item.name}</h4>
									<p class="opacity-75">{item.description}</p>
								</div>
							</div>
						{/each}
					</div>

					<div class="hidden grid-cols-3 gap-4 md:grid">
						{#each dailySetup.software as item}
							<div
								class="group relative rounded-2xl"
								style="background: rgba(var(--color-background), 0.4);"
								on:click={() => openModal(item)}
							>
								<div
									class="flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[var(--color-primary)] p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
								>
									<img
										src={item.image}
										alt={item.name}
										class="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
									/>
								</div>

								<div
									class="tooltip pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 transform rounded-lg bg-gray-900 px-3 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-gray-700"
								>
									{item.name}
									<div
										class="tooltip-arrow absolute top-full left-1/2 -translate-x-1/2 transform border-t-4 border-r-4 border-l-4 border-transparent border-t-gray-900 dark:border-t-gray-700"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="px-6 py-16 md:px-12">
		<div class="mx-auto max-w-4xl">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-3xl font-bold">Tech Stack</h2>
				<!-- <p class="text-lg opacity-75"></p> -->
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				<div class="card p-6">
					<h3 class="mb-4 text-xl font-semibold" style="color: rgb(var(--color-primary));">
						Frontend
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each techStack.frontend as tech}
							<span
								class="tag"
								style="background: rgba(var(--color-primary), 0.1); color: rgb(var(--color-primary));"
							>
								{tech}
							</span>
						{/each}
					</div>
				</div>

				<!-- <div class="card p-6">
          <h3 class="text-xl font-semibold mb-4" style="color: rgb(var(--color-secondary));">Backend</h3>
          <div class="flex flex-wrap gap-2">
            {#each techStack.backend as tech}
              <span class="tag" style="background: rgba(var(--color-secondary), 0.1); color: rgb(var(--color-secondary));">
                {tech}
              </span>
            {/each}
          </div>
        </div> -->

				<!-- Tools -->
				<div class="card p-6">
					<h3 class="mb-4 text-xl font-semibold" style="color: rgb(var(--color-accent));">
						Tools & Services
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each techStack.tools as tech}
							<span
								class="tag"
								style="background: rgba(var(--color-accent), 0.1); color: rgb(var(--color-accent));"
							>
								{tech}
							</span>
						{/each}
					</div>
				</div>

				<!-- Learning -->
				<!-- <div class="card p-6">
          <h3 class="text-xl font-semibold mb-4" style="color: rgb(var(--color-primary));">Currently Learning</h3>
          <div class="flex flex-wrap gap-2">
            {#each techStack.learning as tech}
              <span class="tag" style="background: rgba(var(--color-primary), 0.1); color: rgb(var(--color-primary));">
                {tech}
              </span>
            {/each}
          </div>
        </div> -->
			</div>
		</div>
	</section>

	<section class="px-6 py-16 md:px-12">
		<div class="mx-auto max-w-4xl">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-3xl font-bold">What Drives Me</h2>
				<p class="text-lg opacity-75">The ideas and concepts that inspire my work</p>
			</div>

			<div class="grid gap-6 md:grid-cols-2">
				{#each interests as interest}
					<div class="card group p-6 transition-transform duration-300 hover:scale-105">
						<div class="flex items-start space-x-4">
							<!-- <span class="text-3xl group-hover:scale-110 transition-transform duration-300">{interest.icon}</span> -->
							<div>
								<h3 class="mb-2 text-xl font-semibold">{interest.name}</h3>
								<p class="opacity-75">{interest.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="px-6 py-16 md:px-12">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="mb-4 text-3xl font-bold">Get In Touch</h2>
			<p class="mb-8 text-lg opacity-75">
				Love to connect with fellow creators, developers, and digital garden enthusiasts
			</p>

			<div class="flex justify-center space-x-6">
				<!-- <a href="https://twitter.com" class="card p-4 hover:scale-105 transition-transform duration-300 flex items-center space-x-2" style="background: rgba(var(--color-primary), 0.05);">
          <span class="text-2xl">🐦</span>
          <span>Twitter</span>
        </a> -->
				<a
					href="https://github.com/re-masashi"
					class="card flex items-center space-x-2 p-4 transition-transform duration-300 hover:scale-105"
					target="_blank"
					style="background: rgba(var(--color-secondary), 0.05);"
				>
					<span class="text-2xl">🐙</span>
					<span>GitHub</span>
				</a>
				<a
					href="mailto:nafines007@gmail.com"
					class="card flex items-center space-x-2 p-4 transition-transform duration-300 hover:scale-105"
					target="_blank"
					style="background: rgba(var(--color-accent), 0.05);"
				>
					<span class="text-2xl">✉️</span>
					<span>Email</span>
				</a>
			</div>
		</div>
	</section>
</div>

{#if showModal && selectedSoftware}
	<div
		class="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-xl"
		on:click={closeModal}
		role="dialog"
	>
		<div
			class="modal-content w-full max-w-md transform rounded-2xl p-6 backdrop-blur-xl transition-all duration-300"
			style="background: rgba(var(--color-foreground), 0.1);"
			on:click|stopPropagation
			role="dialog"
		>
			<button
				class="absolute top-4 right-4 text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
				on:click={closeModal}
				aria-label="close modal"
				tabindex="-1"
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
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<div class="mb-6 text-center">
				<div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-xl p-3">
					<img
						src={selectedSoftware.image}
						alt={selectedSoftware.name}
						class="h-full w-full object-contain"
					/>
				</div>
				<h3 class="mb-2 text-2xl font-bold">{selectedSoftware.name}</h3>
				<span
					class="inline-block rounded-full px-3 py-1 text-sm font-medium"
					style="background: rgba(var(--color-secondary), 0.1); color: rgb(var(--color-secondary));"
				>
					{selectedSoftware.category}
				</span>
			</div>

			<p class="leading-relaxed text-gray-600 dark:text-gray-300">
				{selectedSoftware.longDescription}
			</p>

			<div class="mt-6 flex justify-center">
				<button
					class="rounded-full px-6 py-2 font-medium transition-colors duration-200"
					style="background: rgb(var(--color-secondary)); color: white;"
					on:click={closeModal}
				>
					Got it!
				</button>
			</div>
		</div>
	</div>
{/if}
