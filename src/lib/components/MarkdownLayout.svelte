<!-- src/lib/components/MarkdownLayout.svelte -->
<script>
	export let title;
	export let date;
	export let tags;
</script>

<article class="prose prose-lg max-w-none">
	<header class="mb-8">
		<h1 class="text-foreground mb-4 text-4xl font-bold">{title}</h1>
		{#if date}
			<div class="mb-6 flex items-center text-sm opacity-75">
				<span
					>{new Date(date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}</span
				>
				{#if tags && tags.length > 0}
					<span class="mx-2">•</span>
					<div class="flex gap-2">
						{#each tags as tag}
							<span
								class="tag"
								style="background-color: rgba(var(--color-primary), 0.1); color: rgb(var(--color-primary));"
							>
								{tag}
							</span>
						{/each}
					</div>
				{/if}
			</div>
		{/if}
	</header>

	<slot />
</article>

<style>
	.prose {
		color: rgb(var(--color-foreground));
	}

	.prose h1,
	.prose h2,
	.prose h3,
	.prose h4,
	.prose h5,
	.prose h6 {
		color: rgb(var(--color-foreground));
		font-weight: 700;
	}

	:global(.dark) .prose h1,
	:global(.dark) .prose h2,
	:global(.dark) .prose h3,
	:global(.dark) .prose h4,
	:global(.dark) .prose h5,
	:global(.dark) .prose h6 {
		color: rgb(240, 240, 240);
	}

	.text-foreground {
		color: rgb(var(--color-foreground));
	}

	:global(.dark) .text-foreground {
		color: rgb(240, 240, 240);
	}
</style>
