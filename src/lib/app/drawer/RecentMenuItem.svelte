<script lang="ts">
	import type { HistoryItem } from '../../model';
	import { createEventDispatcher } from 'svelte';
	import TrashIcon from '../components/icons/TrashIcon.svelte';
	import AutoConfirm from '../components/AutoConfirm.svelte';

	const dispatch = createEventDispatcher();

	export let item: HistoryItem;

	function load() {
		dispatch('loadRadar', { radar: item.radar });
	}

	function remove() {
		dispatch('removeRadar', { radar: item.radar });
	}
</script>

<div class="group flex flex-row items-center pl-5 pr-5 pt-1 pb-1 hover:bg-base-300 ">
	<div class="flex-grow cursor-pointer" on:click={load} on:keypress={load}>
		{item.radar.name}
	</div>

	<div class="hidden group-hover:block">
		<AutoConfirm on:confirm={remove}>
			<span class="pl-2 pr-2" slot="confirm">Click to confirm</span>
			<span class="btn-ghost btn-xs btn">
				<TrashIcon />
			</span>
		</AutoConfirm>
	</div>
</div>
