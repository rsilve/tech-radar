<script lang="ts">
	import Target from '../components/blip/Target.svelte';
	import Blip from './Blip.svelte';
	import Quarter from './Quarter.svelte';
	import { filtered, items } from '../../stores';
	import { dragged } from '../../stores/dnd';

	function handleDropBlip(e) {
		const updated = { ...dragged.get(), ...e.detail };
		dragged.update(() => null);
		items.update(updated);
	}
</script>

<div class="radar grid h-full justify-start">
	<Quarter quarter={1} />
	<Quarter quarter={2} />
	<Quarter quarter={3} />
	<Quarter quarter={4} />
	<div
		class="relative aspect-square justify-self-center portrait:w-full portrait:max-w-full landscape:h-full landscape:max-h-full"
		style="grid-area: target"
	>
		<Target on:dropBlip={handleDropBlip} />
		{#each $filtered as item}
			<Blip {item} />
		{/each}
	</div>
	<div class="mt-2 text-center text-xs opacity-50 print:hidden" style="grid-area: comment">
		Double click on a blip to edit it
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
