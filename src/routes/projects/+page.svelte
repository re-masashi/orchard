<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	export let data = { projects: [] };
	$: projects = data.projects || [];

	// Debugging
	$: console.log('Client-side projects:', projects);
</script>

<svelte:head>
	<title>Projects | Masashi's Orchard</title>
</svelte:head>

<div class="min-h-screen px-6 py-12 md:px-12 md:py-20">
	<div class="mx-auto max-w-4xl">
		<div class="mb-12 text-center">
			<h1 class="mb-2 text-4xl font-bold">Projects</h1>
			<p class="text-lg opacity-75">Fun(?) stuff I've worked on</p>
		</div>

		{#if projects && projects.length > 0}
			<div class="grid grid-cols-1 gap-8">
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		{:else}
			<div class="py-12 text-center">
				<p class="text-lg opacity-75">No projects yet. Check back soon!</p>
			</div>
		{/if}
	</div>
</div>
