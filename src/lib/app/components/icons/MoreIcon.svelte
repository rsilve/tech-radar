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
			d="M207.858 624Q188 624 174 609.858q-14-14.141-14-34Q160 556 174.142 542q14.141-14 34-14Q228 528 242 542.142q14 14.141 14 34Q256 596 241.858 610q-14.141 14-34 14Zm272 0Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm272 0Q732 624 718 609.858q-14-14.141-14-34Q704 556 718.142 542q14.141-14 34-14Q772 528 786 542.142q14 14.141 14 34Q800 596 785.858 610q-14.141 14-34 14Z"
			fill="currentColor"
			stroke="currentColor"
			stroke-width="24"
		/>
	</svg>
</AbstractIcon>
