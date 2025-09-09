<!-- src/lib/components/CodeHighlight.svelte -->
<script>
	import Highlight from 'svelte-highlight';
	import javascript from 'svelte-highlight/languages/javascript';
	import typescript from 'svelte-highlight/languages/typescript';
	import css from 'svelte-highlight/languages/css';
	import html from 'svelte-highlight/languages/html';
	import python from 'svelte-highlight/languages/python';
	import svelte from 'svelte-highlight/languages/svelte';

	// Import a theme
	import github from 'svelte-highlight/styles/github';

	export let code = '';
	export let language = 'javascript';

	const languages = {
		javascript,
		typescript,
		css,
		html,
		python,
		svelte
	};

	$: selectedLanguage = languages[language] || javascript;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<Highlight language={selectedLanguage} {code} />
