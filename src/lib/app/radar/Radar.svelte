<script lang="ts">
	import Blip from '../components/radar/blip/Blip.svelte';
	import Quarter from './Quarter.svelte';
	import { type AppContext, dragged, selected } from '../../stores';
	import { navigate } from 'svelte-navigator';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from '../GlobalContext';
	import Target from './Target.svelte';
	import { addOrUpdateItem } from '../../model';

	const { items, filtered, colorMap } = getContext<AppContext>(GLOBAL_CONTEXT);

	function edit(e) {
		navigate(`/edit/${e.detail.index}`);
	}

	function select(e) {
		selected.toggle(e.detail);
	}

	function handleDragStartBlip(e) {
		dragged.update(() => e.detail);
	}

	function handleDragEndBlip() {
		dragged.update(() => null);
	}

	function handleDropBlip(e) {
		const updated = { ...dragged.get(), ...e.detail };
		items.update((list) => {
			return addOrUpdateItem(list, updated);
		});
	}
</script>

<div class="radar grid h-full justify-start">
	<Quarter on:edit={edit} on:select={select} quarter={1} />
	<Quarter on:edit={edit} on:select={select} quarter={2} />
	<Quarter on:edit={edit} on:select={select} quarter={3} />
	<Quarter on:edit={edit} on:select={select} quarter={4} />
	<div
		class="relative aspect-square justify-self-center portrait:w-full portrait:max-w-full landscape:h-full landscape:max-h-full"
		style="grid-area: target"
	>
		<Target on:dropBlip={handleDropBlip} />
		{#each $filtered as item}
			<Blip
				{item}
				colorMap={$colorMap}
				on:edit={edit}
				on:select={select}
				on:dragStartBlip={handleDragStartBlip}
				on:dragEndBlip={handleDragEndBlip}
			/>
		{/each}
	</div>
	<div class="mt-2 text-center text-xs opacity-50 print:hidden" style="grid-area: comment">
		Double click on a blip to edit it
		<br />
		Drag'n drop blip to move it
	</div>
</div>

<style>
	.radar {
		position: initial;
		grid-template-columns: minmax(max-content, 1fr) 3fr minmax(max-content, 1fr);
		grid-template-areas:
			'name name name'
			'quarter-2 target quarter-1'
			'quarter-3 target quarter-4'
			'comment comment comment';
		grid-template-rows: min-content 1fr 1fr min-content;
	}
</style>
