<script lang="ts">
	import ItemLabel from './ItemLabel.svelte';
	import type { ItemEnhanced, TagColors } from '../../../model';

	export let items: ItemEnhanced[] = [];
	export let colorMap: TagColors = {};
</script>

<ul class="items-list columns-2">
	{#each items.filter((value) => value.level === 1) as item, index}
		{#if index === 0}
			<li class="title">Adopt</li>
		{/if}
		<li>
			<ItemLabel {item} {colorMap} on:select on:edit />
		</li>
	{/each}

	{#each items.filter((value) => value.level === 2) as item, index}
		{#if index === 0}
			<li class="title">Trial</li>
		{/if}
		<li>
			<ItemLabel {item} {colorMap} on:select on:edit />
		</li>
	{/each}

	{#each items.filter((value) => value.level === 3) as item, index}
		{#if index === 0}
			<li class="title">Assess</li>
		{/if}
		<li>
			<ItemLabel {item} {colorMap} on:select on:edit />
		</li>
	{/each}

	{#each items.filter((value) => value.level === 4) as item, index}
		{#if index === 0}
			<li class="title">Hold</li>
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
