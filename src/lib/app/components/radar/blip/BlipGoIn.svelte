<script lang="ts">
	import type { Quarter } from '../../../../model';

	export let quarter: Quarter;
</script>

{#if quarter === 1}
	<div
		class="absolute bottom-0 left-0 h-0 w-0 border-2 border-t-0 border-r-0 border-slate-800/60 p-1"
	/>
{:else if quarter === 2}
	<div
		class="absolute bottom-0 right-0 h-0 w-0 border-2 border-t-0 border-l-0 border-slate-800/60 p-1"
	/>
{:else if quarter === 3}
	<div
		class="absolute top-0 right-0 h-0 w-0 border-2 border-b-0 border-l-0 border-slate-800/60 p-1"
	/>
{:else}
	<div
		class="absolute top-0 left-0 h-0 w-0 border-2 border-b-0 border-r-0 border-slate-800/60 p-1"
	/>
{/if}
