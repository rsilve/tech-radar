<script>
	import AbstractIcon from './AbstractIcon.svelte';

	export let alt = '';
</script>

<AbstractIcon>
	<svg
		aria-label={alt}
		fill="currentColor"
		role="img"
		stroke="currentColor"
		viewBox="0 96 960 960"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{alt}</title>
		<path
			d="m561 814-43-42 168-168H160v-60h526L517 375l43-42 241 241-240 240Z"
			fill="currentColor"
			stroke="currentColor"
			stroke-width="24"
		/>
	</svg>
</AbstractIcon>
