<script lang="ts">
	import type { Quarter } from '../../../../model';
	import ArrowRightIcon from '../../icons/ArrowRightIcon.svelte';

	export let quarter: Quarter;
</script>

{#if quarter === 1}
	<div class="absolute bottom-0 left-0 -translate-x-2 translate-y-2 rotate-[135deg] text-neutral">
		<ArrowRightIcon />
	</div>
{:else if quarter === 2}
	<div class="absolute bottom-0 right-0 translate-x-2 translate-y-2 rotate-45 text-neutral">
		<ArrowRightIcon />
	</div>
{:else if quarter === 3}
	<div class="absolute top-0 right-0 translate-x-2 -translate-y-2 -rotate-45 text-neutral">
		<ArrowRightIcon />
	</div>
{:else}
	<div class="absolute top-0 left-0 -translate-x-2 -translate-y-2 -rotate-[135deg] text-neutral">
		<ArrowRightIcon />
	</div>
{/if}
