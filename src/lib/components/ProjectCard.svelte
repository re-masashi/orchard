<script>
	export let project;
</script>

<div class="card group flex h-full flex-col p-6">
	<!-- <div class="w-full h-44 mb-5 rounded-2xl overflow-hidden flex items-center justify-center relative" 
       style="background: linear-gradient(135deg, rgba(var(--color-primary), 0.15) 0%, rgba(var(--color-secondary), 0.15) 100%);">
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
         style="background: radial-gradient(circle at center, rgba(var(--color-primary), 0.2) 0%, transparent 70%);"></div>
  </div> -->

	<h3 class="mb-3 text-xl font-semibold" style="color: rgb(var(--color-primary));">
		{project.title}
	</h3>
	<p class="mb-5 flex-grow opacity-80">{project.description}</p>

	<div class="mb-5 flex flex-wrap gap-2">
		{#each project.tags as tag, index}
			<span
				class="tag"
				style:color={`rgb(var(--color-${index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}))`}
			>
				{tag}
			</span>
		{/each}
	</div>

	<a
		href={`/projects/${project.slug}`}
		class="inline-flex items-center self-start font-medium transition-all duration-300 hover:translate-x-1"
		style="color: rgb(var(--color-primary));"
	>
		View Project
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="ml-1 h-4 w-4"
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
