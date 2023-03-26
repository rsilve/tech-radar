<script>
	import AbstractIcon from './AbstractIcon.svelte';
	export let alt = '';
</script>

<AbstractIcon>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 960 960"
		fill="currentColor"
		stroke="currentColor"
		role="img"
		aria-label={alt}
	>
		<title>{alt}</title>
		<path
			d="M220 896q-24 0-42-18t-18-42V693h60v143h520V693h60v143q0 24-18 42t-42 18H220Zm230-153V372L330 492l-43-43 193-193 193 193-43 43-120-120v371h-60Z"
			stroke-width="24"
			fill="currentColor"
			stroke="currentColor"
		/></svg
	>
</AbstractIcon>
