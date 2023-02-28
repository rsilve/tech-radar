<script lang="ts">
	import type { Item } from '../../../model';
	import { toArc } from '../../../utils';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let radius: number;
	export let item: Item;
	export let selected = false;

	function handleDragStart(e) {
		e.dataTransfer.dropEffect = 'move';
		e.dataTransfer.effectAllowed = 'move';
		dispatch('dragStartBlip');
	}
	function handleDragEnd() {
		dispatch('dragEndBlip');
	}
</script>

<div
	draggable="true"
	on:dragstart={handleDragStart}
	on:dragend={handleDragEnd}
	class="absolute -translate-x-1/2 -translate-y-1/2 transition hover:z-50"
	class:scale-[1.2]={selected}
	class:brightness-125={selected}
	style="top:{radius + toArc(item, radius / 5).x}%; left:{radius + toArc(item, radius / 5).y}%;"
	data-tip={item.name}
>
	<div class="relative flex items-center -space-x-[1.5rem]">
		<slot />
	</div>
</div>
