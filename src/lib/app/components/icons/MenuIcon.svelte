<script>
	import AbstractIcon from './AbstractIcon.svelte';

	export let alt = '';
</script>

<AbstractIcon>
	<svg
		viewBox="0 96 960 960"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		stroke="currentColor"
		role="img"
		aria-label={alt}
	>
		<title>{alt}</title>
		<path
			d="m120 816v-60h720v60zm0-210v-60h720v60zm0-210v-60h720v60z"
			stroke-width="24"
			fill="currentColor"
			stroke="currentColor"
		/></svg
	>
</AbstractIcon>
