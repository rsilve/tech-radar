<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Item, ItemEnhanced } from '../../../../model';
	import { useDblClick } from '../../../../utils';
	import BlipDirection from './BlipDirection.svelte';

	const dispatch = createEventDispatcher();
	const [singleClick, dblClick] = useDblClick();

	export let item: ItemEnhanced;

	function select(item: Item) {
		return () =>
			singleClick(() => {
				dispatch('select', item);
			});
	}

	function edit(item: Item) {
		return () =>
			dblClick(() => {
				dispatch('edit', item);
			});
	}

	function hasTagsOrDuplicate(item: ItemEnhanced) {
		return item.tags.length > 0 || item.duplicate;
	}
</script>

<div
	class="relative flex h-7 w-7 content-around items-center rounded-full border border-slate-900/30 pl-1 pr-1 text-slate-100 "
	class:bg-slate-500={!hasTagsOrDuplicate(item)}
	class:bg-transparent={hasTagsOrDuplicate(item)}
>
	<div class="grid grid-cols-1 grid-rows-1 items-center">
		<BlipDirection {item} />
		<div class="overflow-hidden hover:overflow-visible" style="grid-area: 1 / 1 / 2 / 2">
			<span
				class="cursor-pointer whitespace-nowrap"
				draggable="false"
				on:click={select(item)}
				on:dblclick={edit(item)}
				on:keypress={select(item)}
				style="text-shadow: 1px 1px 1px rgba(0,0,0,.7)">{item.name}</span
			>
		</div>
	</div>
</div>
