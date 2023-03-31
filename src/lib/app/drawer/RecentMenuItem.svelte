<script lang="ts">
	import type { HistoryItem } from '../../model';
	import { createEventDispatcher } from 'svelte';
	import MoreIcon from '../components/icons/MoreIcon.svelte';

	const dispatch = createEventDispatcher();

	export let item: HistoryItem;

	let actionOpened = false;

	function load() {
		dispatch('loadRadar', { radar: item.radar });
	}

	function handleMore() {
		actionOpened = true;
		setTimeout(() => (actionOpened = false), 2000);
	}
</script>

<div class="group flex flex-row items-center pl-5 pr-5 pt-1 pb-1 hover:bg-base-300 ">
	<div class="flex-grow cursor-pointer" on:click={load} on:keypress={load}>
		{item.radar.name}
	</div>
	<div class="hidden group-hover:block">
		{#if actionOpened}
			<button class="btn-ghost btn-xs btn">suppr</button>
		{:else}
			<button class="btn-ghost btn-xs btn" on:click={handleMore}>
				<MoreIcon />
			</button>
		{/if}
	</div>
</div>
