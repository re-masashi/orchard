<script>
	import { error } from '@sveltejs/kit';

	export let data;
	const { post } = data;

	$: content = post?.content || '';
</script>

<svelte:head>
	{#if post}
		<title>{post.title}</title>
	{:else}
		<title>Post not found :p</title>
	{/if}
</svelte:head>

{#if post}
	<div
		class="min-h-screen px-6 py-12 md:px-12 md:py-20"
		style="background: rgb(var(--color-background), 1)"
	>
		<article class="mx-auto max-w-3xl">
			<header class="mb-8">
				<h1 class="mb-4 text-4xl font-bold">{post.title}</h1>
				<div class="mb-6 flex items-center text-sm opacity-75">
					<span
						>{new Date(post.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}</span
					>
					{#if post.tags && post.tags.length > 0}
						<span class="mx-2">•</span>
						<div class="flex gap-2">
							{#each post.tags as tag}
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
			</header>

			<div class="prose prose-lg max-w-none">
				{#if typeof content === 'function'}
					<svelte:component this={content} />
				{:else if typeof content === 'string'}
					{@html content}
				{:else}
					<p>Content format not recognized.</p>
				{/if}
			</div>

			<div class="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
				<a
					href="/posts"
					class="inline-flex items-center text-sm font-medium"
					style="color: rgb(var(--color-primary));"
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
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
					Back to all posts
				</a>
			</div>
		</article>
	</div>
{:else}
	<div class="flex min-h-screen items-center justify-center">
		<p class="text-lg opacity-75">Post not found.</p>
	</div>
{/if}

<style>
	.prose {
		color: rgb(var(--color-foreground));
	}

	/* Use higher specificity for headings */
	:global(.prose h1),
	:global(.prose h2),
	:global(.prose h3),
	:global(.prose h4),
	:global(.prose h5),
	:global(.prose h6) {
		color: rgb(var(--color-foreground)) !important;
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-weight: 700;
	}

	/* Dark mode headings with higher specificity */
	:global(.dark .prose h1),
	:global(.dark .prose h2),
	:global(.dark .prose h3),
	:global(.dark .prose h4),
	:global(.dark .prose h5),
	:global(.dark .prose h6) {
		color: #f0f0f0 !important;
	}

	:global(.prose > p) {
		margin-bottom: 1.5rem;
		line-height: 1.7;
	}

	:global(.prose code) {
		/*background-color: rgba(var(--color-primary), 0.1);*/
		/*color: rgb(var(--color-primary));*/
		padding: 0.2em 0.4em;
		border-radius: 0.25rem;
		font-size: 0.875em;
	}

	:global(.dark .prose code) {
		/*background-color: rgba(var(--color-primary), 0.2);*/
		/*color: rgb(var(--color-primary));*/
	}

	:global(.prose pre) {
		/*background-color: rgba(var(--color-primary), 0.05);*/
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin-bottom: 1.5rem;
		/*border: 1px solid rgba(var(--color-primary), 0.1);*/
	}

	:global(.dark .prose pre) {
		background-color: rgba(45, 45, 55, 0.8);
		/*border: 1px solid rgba(var(--color-primary), 0.2);*/
	}

	:global(.prose pre code) {
		background: none;
		color: inherit;
		padding: 0;
	}

	:global(.prose strong) {
		background: none;
		color: inherit;
		padding: 0;
	}

	:global(.prose code) {
		background: none;
		color: rgb(var(--color-primary));
		padding: 0;
	}

	:global(.prose a) {
		background: none;
		color: rgb(var(--color-secondary));
		padding: 0;
	}
</style>
