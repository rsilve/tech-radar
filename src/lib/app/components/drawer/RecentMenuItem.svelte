<script lang="ts">
	import type { HistoryItem } from '../../../model';
	import { createEventDispatcher } from 'svelte';
	import TrashIcon from '../icons/TrashIcon.svelte';
	import AutoConfirm from '../AutoConfirm.svelte';
	import CopyIcon from '../icons/CopyIcon.svelte';
	import { humanize } from '../../../utils/date';

	const dispatch = createEventDispatcher();

	export let item: HistoryItem;

	function load() {
		dispatch('loadRadar', { radar: item.radar });
	}

	function remove() {
		dispatch('removeRadar', { radar: item.radar });
	}

	function copy() {
		dispatch('copyRadar', { radar: item.radar });
	}
</script>

<div class="group flex max-w-full flex-row items-center pl-5 pr-5 pt-1 pb-1 hover:bg-base-300">
	<div class="flex-grow cursor-pointer truncate" on:click={load} on:keypress={load}>
		{item.radar.name} <span class="text-xs text-accent">{humanize(item.editedAt)}</span>
	</div>

	<div class="hidden group-hover:block">
		<div class="flex flex-row gap-1">
			<button class="btn-ghost btn-xs btn" on:click={copy}>
				<CopyIcon />
			</button>
			<AutoConfirm on:confirm={remove}>
				<span class="whitespace-nowrap pl-2 pr-2" slot="confirm">Click to confirm</span>
				<span class="btn-ghost btn-xs btn">
					<TrashIcon />
				</span>
			</AutoConfirm>
		</div>
	</div>
</div>
