<script lang="ts">
	import ItemLabel from '../components/radar/ItemLabel.svelte';
	import type { ItemEnhanced, TagColors } from '../../model';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from '../GlobalContext';
	import type { AppContext } from '../../stores';

	const { adoptionLevels } = getContext<AppContext>(GLOBAL_CONTEXT);

	export let items: ItemEnhanced[] = [];
	export let colorMap: TagColors = {};
</script>

<ul class="items-list">
	{#each items.filter((value) => value.level === 1) as item, index}
		{#if index === 0}
			<li class="title">{$adoptionLevels[1]}</li>
		{/if}
		<li>
			<ItemLabel {item} {colorMap} on:select on:edit />
		</li>
	{/each}

	{#each items.filter((value) => value.level === 2) as item, index}
		{#if index === 0}
			<li class="title">{$adoptionLevels[2]}</li>
		{/if}
		<li>
			<ItemLabel {item} {colorMap} on:select on:edit />
		</li>
	{/each}

	{#each items.filter((value) => value.level === 3) as item, index}
		{#if index === 0}
			<li class="title">{$adoptionLevels[3]}</li>
		{/if}
		<li>
			<ItemLabel {item} {colorMap} on:select on:edit />
		</li>
	{/each}

	{#each items.filter((value) => value.level === 4) as item, index}
		{#if index === 0}
			<li class="title">{$adoptionLevels[4]}</li>
		{/if}
		<li>
			<ItemLabel {item} {colorMap} on:select on:edit />
		</li>
	{/each}
</ul>

<style>
	.items-list {
		column-fill: auto;
	}

	li.title {
		font-variant: small-caps;
		font-weight: bolder;
	}
</style>
