<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ItemEnhanced, TagColors } from '../../../model';
	import { useDblClick } from '../../../utils';
	import TagBadge from '../TagBadge.svelte';

	const dispatch = createEventDispatcher();
	const [singleClick, dblClick] = useDblClick();

	export let item: ItemEnhanced;
	export let colorMap: TagColors = {};

	function select() {
		return singleClick(() => {
			dispatch('select', item);
		});
	}

	function edit() {
		return dblClick(() => {
			dispatch('edit', item);
		});
	}
</script>

<div style="text-decoration: {item.selected ? 'underline' : 'none'}">
	<a on:click={select} on:dblclick={edit} href={'#'} tabIndex="-1">
		{item.name}
		{#if item.duplicate}
			<span class="badge-warning badge badge-xs" />
		{/if}
		<span class="inline-flex items-center gap-1">
			{#each item.tags as tag}
				<TagBadge {tag} {colorMap} />
			{/each}
			{#if item.comment}
				<span
					class="tooltip inline-block flex h-4 w-4 items-center justify-center rounded-full border border-accent text-xs"
					data-tip="Comment">C</span
				>
			{/if}
		</span>
	</a>
</div>
