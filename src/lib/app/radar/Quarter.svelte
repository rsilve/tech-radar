<script>
	import ItemsList from './ItemsList.svelte';
	import { colorMap, enhanced } from '../../stores/';

	export let quarter = 0;
</script>

<div class="ml-2 flex h-full max-h-full pb-2 text-xs" style="grid-area: quarter-{quarter}">
	<ItemsList
		items={$enhanced.filter((value) => value.quarter === quarter)}
		colorMap={$colorMap}
		on:select
		on:edit
	/>
</div>
