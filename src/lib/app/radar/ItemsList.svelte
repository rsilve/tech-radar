<script lang="ts">
	import { colorMap, enhanced } from '../../stores';
	import ItemLabel from '../components/ItemLabel.svelte';

	export let quarter: number;
</script>

<ul class="items-list columns-2">
	{#each $enhanced.filter((value) => value.quarter === quarter && value.level === 1) as item, index}
		{#if index === 0}
			<li class="title">Adopt</li>
		{/if}
		<li>
			<ItemLabel {item} colorMap={$colorMap} on:select on:edit />
		</li>
	{/each}

	{#each $enhanced.filter((value) => value.quarter === quarter && value.level === 2) as item, index}
		{#if index === 0}
			<li class="title">Trial</li>
		{/if}
		<li>
			<ItemLabel {item} colorMap={$colorMap} on:select on:edit />
		</li>
	{/each}

	{#each $enhanced.filter((value) => value.quarter === quarter && value.level === 3) as item, index}
		{#if index === 0}
			<li class="title">Assess</li>
		{/if}
		<li>
			<ItemLabel {item} colorMap={$colorMap} on:select on:edit />
		</li>
	{/each}

	{#each $enhanced.filter((value) => value.quarter === quarter && value.level === 4) as item, index}
		{#if index === 0}
			<li class="title">Hold</li>
		{/if}
		<li>
			<ItemLabel {item} colorMap={$colorMap} on:select on:edit />
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
