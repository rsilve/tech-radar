<script lang="ts">
	import type { ItemEnhanced, TagColors } from '../../../../model';
	import BlipDirection from './BlipDirection.svelte';
	import BlipStack from './BlipStack.svelte';
	import BlipNumber from './BlipNumber.svelte';
	import BlipDuplicate from './BlipDuplicate.svelte';
	import BlipTag from './BlipTag.svelte';

	export let item: ItemEnhanced;
	export let colorMap: TagColors = {};
</script>

<BlipStack {item} on:dragStartBlip on:dragEndBlip>
	{#if item.duplicate}
		<BlipDuplicate />
	{/if}
	{#each item.tags.reverse() as tag}
		<BlipTag color={colorMap[tag] || 'transparent'} />
	{/each}
	<BlipDirection {item} />
	<BlipNumber {item} on:select on:edit />
</BlipStack>
