<!-- src/lib/components/PostCard.svelte -->
<script>
	export let post;
</script>

<div class="card p-6">
	<div class="mb-4 flex items-center justify-between">
		<span class="text-sm opacity-75">
			{new Date(post.date).toLocaleDateString()}
		</span>
		{#if post.tags && post.tags.length > 0}
			<span
				class="tag"
				style="background-color: rgba(var(--color-primary), 0.1); color: rgb(var(--color-primary));"
			>
				{post.tags[0]}
			</span>
		{/if}
	</div>
	<h3 class="mb-3 text-xl font-semibold">{post.title}</h3>
	<p class="mb-4 opacity-80">{post.excerpt}</p>
	<a href={`/posts/${post.slug}`} class="font-medium" style="color: rgb(var(--color-primary));">
		Read Post →
	</a>
</div>
