<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import PostCard from '$lib/components/PostCard.svelte';

	export let data;
	$: ({ featuredProjects, recentPosts } = data);
</script>

<svelte:head>
	<title>Masashi's Orchard</title>
</svelte:head>

<div class="relative overflow-hidden">
	<!-- Hero Section -->
	<section class="relative flex min-h-screen flex-col justify-center px-6 md:px-12">
		<div
			class="hero-content relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between"
		>
			<div class="w-full md:w-1/2">
				<h1 class="mb-6 text-4xl leading-tight font-bold md:text-5xl">
					Meow, I'm <span class="italic" style="color: rgb(var(--color-primary));">Masashi</span>
				</h1>
				<p class="mb-8 text-lg leading-relaxed opacity-90 md:text-xl">
					I share my thoughts, progress, findings and anything random here.
				</p>
				<div class="flex flex-col items-center gap-4 px-10 md:flex-row md:px-2">
					<a
						href="/projects"
						class="flex w-full items-center rounded-full px-6 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg"
						style="background: rgb(var(--color-primary))"
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
								d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
							/>
						</svg>
						View My Work
					</a>
					<a
						href="/posts"
						class="flex w-full items-center rounded-full border px-6 py-3 font-medium transition-all duration-300 hover:shadow-lg"
						style="border-color: rgb(var(--color-primary)); color: rgb(var(--color-primary));"
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
								d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
							/>
						</svg>
						Read My Thoughts
					</a>
				</div>
			</div>
			<div class="hidden md:block md:w-2/5">
				<div
					class="mx-auto h-72 w-72 overflow-hidden rounded-full border-4 shadow-xl"
					style="border-color: rgba(var(--color-primary), 0.2);"
				>
					<div
						class="flex h-full w-full items-center justify-center"
						style="background: linear-gradient(135deg, rgb(var(--color-primary)) 0%, rgb(var(--color-secondary)) 100%);"
					></div>
				</div>
			</div>
		</div>
	</section>

	<section id="projects" class="relative px-6 py-16 pt-0 md:px-12 md:py-24 md:pt-4">
		<div class="mx-auto max-w-6xl">
			<div class="mb-12 text-center">
				<h2 class="mb-2 text-3xl font-bold">Projects</h2>
				<p class="text-lg opacity-75">Things I've built with love and care</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each featuredProjects as project}
					<ProjectCard {project} />
				{/each}
			</div>

			<div class="mt-12 text-center">
				<a
					href="/projects"
					class="inline-flex items-center rounded-full px-6 py-3 font-medium transition-all duration-300 hover:shadow-lg"
					style="background: rgba(var(--color-primary), 0.1); color: rgb(var(--color-primary));"
				>
					View All Projects
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ml-2 h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</a>
			</div>
		</div>
	</section>

	<section id="posts" class="px-6 py-16 md:px-12 md:py-24">
		<div class="mx-auto max-w-6xl">
			<div class="mb-12 text-center">
				<h2 class="mb-2 text-3xl font-bold">Recent Posts</h2>
				<p class="text-lg opacity-75">Thoughts, tutorials and digital garden entries</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				{#each recentPosts as post}
					<PostCard {post} />
				{/each}
			</div>

			<div class="mt-12 text-center">
				<a
					href="/posts"
					class="inline-flex items-center rounded-full px-6 py-3 font-medium transition-all duration-300 hover:shadow-lg"
					style="background: rgba(var(--color-secondary), 0.1); color: rgb(var(--color-secondary));"
				>
					View All Posts
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ml-2 h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</a>
			</div>
		</div>
	</section>

	<section class="content-mesh-container relative bg-white px-6 py-16 md:px-12 md:py-24">
		<div class="mx-auto max-w-6xl">
			<div class="mb-12 text-center">
				<h2 class="mb-2 text-3xl font-bold">Content Network</h2>
				<p class="text-lg opacity-75">Explore how my ideas and projects connect</p>
			</div>

			<div
				class="content-mesh relative flex items-center justify-center overflow-hidden rounded-lg"
			>
				<p class="mx-auto max-w-md p-8 text-center opacity-75">I'll add this later. :p</p>
			</div>
		</div>
	</section>
</div>
