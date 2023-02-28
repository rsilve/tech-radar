<script lang="ts">
	import type { Item, ItemEnhanced } from '../../model';
	import { colorMap, selected } from '../../stores';
	import { navigate } from 'svelte-navigator';
	import BlipDirection from '../components/blip/BlipDirection.svelte';
	import BlipStack from '../components/blip/BlipStack.svelte';
	import BlipNumber from '../components/blip/BlipNumber.svelte';
	import BlipDuplicate from '../components/blip/BlipDuplicate.svelte';
	import BlipTag from '../components/blip/BlipTag.svelte';
	import { dragged } from '../../stores/dnd';

	export let item: ItemEnhanced;

	let isSelected = false;
	$: isSelected = $selected?.index === item?.index;

	let radius = 50;

	function select(item: Item) {
		return () => {
			selected.toggle(item);
		};
	}

	function edit(item: Item) {
		return () => {
			navigate(`/edit/${item.index}`);
		};
	}

	function handleDragStartBlip() {
		dragged.update(() => item);
	}

	function handleDragEndBlip() {
		dragged.update(() => null);
	}
</script>

<BlipStack
	{radius}
	{item}
	selected={isSelected}
	on:dragStartBlip={handleDragStartBlip}
	on:dragEndBlip={handleDragEndBlip}
>
	{#if item.duplicate}
		<BlipDuplicate />
	{/if}
	{#each item.tags.reverse() as tag}
		<BlipTag color={$colorMap[tag] || '#cccc'} />
	{/each}
	<BlipDirection {item} />
	<BlipNumber {item} on:select={select(item)} on:edit={edit(item)} />
</BlipStack>
