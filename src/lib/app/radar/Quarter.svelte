<script>
	import ItemsList from './ItemsList.svelte';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from '../GlobalContext';

	const { enhanced, colorMap } = getContext(GLOBAL_CONTEXT);

	export let quarter = 0;
</script>

<div class="ml-2 flex h-full max-h-full pb-2 text-xs" style="grid-area: quarter-{quarter}">
	<ItemsList colorMap={$colorMap} items={$enhanced.filter((value) => value.quarter === quarter)} on:edit on:select />
</div>
