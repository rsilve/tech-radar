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
			d="m256 936-42-42 196-196q24-24 32-44t8-59v-265l-90 90-42-42 162-162 162 162-42 42-90-90v265q0 39 8 59t32 44l196 196-42 42-224-224z"
			fill="currentColor"
			stroke="currentColor"
			stroke-width="24"
		/>
	</svg>
</AbstractIcon>
