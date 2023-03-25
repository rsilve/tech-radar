<script lang="ts">
	import Target from './Target.svelte';
	import Blip from '../components/radar/blip/Blip.svelte';
	import Quarter from './Quarter.svelte';
	import { dragged, selected } from '../../stores';
	import { navigate } from 'svelte-navigator';
	import { getContext } from 'svelte';

	const { items, filtered, colorMap } = getContext('global-context');

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
		items.update(updated);
	}
</script>

<div class="radar grid h-full justify-start">
	<Quarter quarter={1} on:edit={edit} on:select={select} />
	<Quarter quarter={2} on:edit={edit} on:select={select} />
	<Quarter quarter={3} on:edit={edit} on:select={select} />
	<Quarter quarter={4} on:edit={edit} on:select={select} />
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
			'quarter-2 target quarter-1'
			'quarter-3 target quarter-4'
			'comment comment comment';
		grid-template-rows: 1fr 1fr min-content;
	}
</style>
