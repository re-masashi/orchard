<script>
	import { page } from '$app/state';
</script>

{#if page.status === 500}
	<h1>Application Error</h1>
	<p>Something went wrong in the application.</p>
	<p>Error: {page.error.message}</p>
{:else}
	<h1>{page.status}</h1>
	<p>{page.error.message}</p>
{/if}
