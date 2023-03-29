<script lang="ts">
	import type { HistoryItem } from '../../model';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let item: HistoryItem;

	function load() {
		dispatch('loadRadar', { radar: item.radar });
	}
</script>

<div class="cursor-pointer pl-1" on:click={load} on:keypress={load}>{item.radar.name}</div>
