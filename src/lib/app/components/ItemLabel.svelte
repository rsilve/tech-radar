<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ItemEnhanced, TagColors } from '../../model';
	import { useDblClick } from '../../utils';
	import TagBadge from './TagBadge.svelte';

	const dispatch = createEventDispatcher();
	const [singleClick, dblClick] = useDblClick();

	export let item: ItemEnhanced;
	export let selected = false;
	export let colorMap: TagColors = {};

	function select() {
		return singleClick(() => {
			dispatch('select');
		});
	}

	function edit() {
		return dblClick(() => {
			dispatch('edit');
		});
	}
</script>

<div style="text-decoration: {selected ? 'underline' : 'none'}">
	<a on:click={select} on:dblclick={edit} href={'#'} tabIndex="-1">
		{item.name}
		{#if item.duplicate}
			<span class="badge-warning badge badge-xs" />
		{/if}
		<span class="inline-flex items-baseline gap-1">
			{#each item.tags as tag}
				<TagBadge {tag} {colorMap} />
			{/each}
		</span>
	</a>
</div>
