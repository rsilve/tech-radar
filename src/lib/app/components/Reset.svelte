<script lang="ts">
	import PlusIcon from './icons/PlusIcon.svelte';

	export let reset;
</script>

<div class="cursor-pointer whitespace-nowrap pt-2 pb-2" on:click={reset} on:keydown={reset}>
	<PlusIcon />
	New radar
</div>
