<script>
	import AbstractIcon from './AbstractIcon.svelte';
	export let alt = '';
</script>

<AbstractIcon>
	<svg
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		aria-label={alt}
		role="img"
	>
		<title>{alt}</title>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			stroke-width="2"
			d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H13V4Z"
			fill="currentColor"
		/>
	</svg>
</AbstractIcon>
