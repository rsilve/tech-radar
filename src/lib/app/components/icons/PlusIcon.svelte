<script>
	import AbstractIcon from './AbstractIcon.svelte';
	export let alt = '';
</script>

<AbstractIcon>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 96 960 960"
		fill="currentColor"
		stroke="currentColor"
		role="img"
		aria-label={alt}
	>
		<title>{alt}</title>
		<path
			d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z"
			stroke-width="24"
			fill="currentColor"
			stroke="currentColor"
		/>
	</svg>
</AbstractIcon>
