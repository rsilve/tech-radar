<script>
	import EditableLabel from './EditableLabel.svelte';
	import { getHistory } from '../../model';
	import RecentMenuItem from './RecentMenuItem.svelte';

	export let radar;
	export let history;
</script>

<div class="flex flex-grow flex-col overflow-y-scroll bg-base-100  pl-4 pr-5 text-base-content">
	<hr class="divider mt-0" />
	<div class="pl-1 text-sm font-bold uppercase text-accent">Current</div>
	<div>
		<EditableLabel {radar} />
	</div>
	<div class="flex-grow pl-1 pt-3 text-sm font-bold uppercase text-accent">Recent</div>
	{#each getHistory($history) as historyItem}
		<RecentMenuItem item={historyItem} on:loadRadar />
	{/each}
	<hr class="divider mb-0" />
</div>
