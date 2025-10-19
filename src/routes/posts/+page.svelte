<script>
	import PostCard from '$lib/components/PostCard.svelte';

	export let data = { posts: [] };
	$: posts = data.posts || [];

	// Debugging
	$: console.log('Client-side posts:', posts);
</script>

<svelte:head>
	<title>Posts | Masashi's Orchard</title>
</svelte:head>

<div class="min-h-screen px-6 py-12 md:px-12 md:py-20">
	<div class="mx-auto max-w-4xl">
		<div class="mb-12 text-center">
			<h1 class="mb-2 text-4xl font-bold">Posts</h1>
			<p class="text-lg opacity-75">Thoughts, tutorials and other stuff</p>
		</div>

		{#if posts && posts.length > 0}
			<div class="grid grid-cols-1 gap-8">
				{#each posts as post}
					<PostCard {post} />
				{/each}
			</div>
		{:else}
			<div class="py-12 text-center">
				<p class="text-lg opacity-75">No posts yet. Check back soon!</p>
			</div>
		{/if}
	</div>
</div>
