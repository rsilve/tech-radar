<script lang="ts">
	import { adoptionLevels } from '../stores';
	import TagBadge from './components/TagBadge.svelte';
	import { getContext } from 'svelte';

	const { items, colorMap, tagsCount } = getContext('global-context');
</script>

<div>
	<div class="text-center">
		{$items.length} blips &mdash;
		{$items.filter((item) => item.level === 1).length}
		{$adoptionLevels[1]} &mdash;
		{$items.filter((item) => item.level === 2).length}
		{$adoptionLevels[2]} &mdash;
		{$items.filter((item) => item.level === 3).length}
		{$adoptionLevels[3]} &mdash;
		{$items.filter((item) => item.level === 4).length}
		{$adoptionLevels[4]}
	</div>
	<div class="flex justify-center gap-2">
		{#each $tagsCount as tag}
			<TagBadge tag={tag.name} count={tag.count} colorMap={$colorMap} />
		{/each}
	</div>
</div>
