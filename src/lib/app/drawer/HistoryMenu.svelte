<script lang="ts">
	import { getHistory, removeFromHistory } from '../../model';
	import RecentMenuItem from './RecentMenuItem.svelte';

	export let radar;
	export let history;

	function handleRemoveRadar(event) {
		history.update((history) => {
			removeFromHistory(event.detail.radar, history);
			return history;
		});
	}
</script>

<div class="flex flex-grow flex-col overflow-y-auto bg-base-100 text-base-content">
	<div class="divider mt-0" />
	<div class="pl-5 pr-5 text-sm font-bold uppercase text-accent">Recent</div>
	{#each getHistory($history) as historyItem}
		<RecentMenuItem item={historyItem} on:copyRadar on:loadRadar on:removeRadar={handleRemoveRadar} />
	{/each}
	<div class="flex-grow" />
	<div class="divider mb-0" />
</div>
