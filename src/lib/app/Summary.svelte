<script lang="ts">
	import TagBadge from './components/TagBadge.svelte';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from './GlobalContext';
	import type { AppContext } from '../stores';

	const { items, colorMap, tagsCount, adoptionLevels } = getContext<AppContext>(GLOBAL_CONTEXT);
</script>

<div class="flex flex-col items-center gap-1">
	<div class="flex flex-row items-center gap-2">
		<div class="badge badge-accent badge-lg">
			Total blips
			<span class="badge-accent-content badge ml-2 flex items-center rounded-full">{$items.length} </span>
		</div>
		<div class="badge badge-accent badge-lg">
			{$adoptionLevels[1]}
			<span class="badge-accent-content badge ml-2 flex items-center rounded-full"
				>{$items.filter((item) => item.level === 1).length}</span
			>
		</div>

		<div class="badge badge-accent badge-lg">
			{$adoptionLevels[2]}
			<span class="badge-accent-content badge ml-2 flex items-center rounded-full"
				>{$items.filter((item) => item.level === 2).length}</span
			>
		</div>

		<div class="badge badge-accent badge-lg">
			{$adoptionLevels[3]}
			<span class="badge-accent-content badge ml-2 flex items-center rounded-full">
				{$items.filter((item) => item.level === 3).length}</span
			>
		</div>

		<div class="badge badge-accent badge-lg">
			{$adoptionLevels[4]}
			<span class="badge-accent-content badge ml-2 flex items-center rounded-full">
				{$items.filter((item) => item.level === 4).length}</span
			>
		</div>
	</div>
	<div class="flex justify-center gap-2">
		{#each $tagsCount as tag}
			<TagBadge tag={tag.name} count={tag.count} colorMap={$colorMap} />
		{/each}
	</div>
</div>
