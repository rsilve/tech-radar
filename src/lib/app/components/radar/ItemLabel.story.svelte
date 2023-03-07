<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import { logEvent } from 'histoire/client';
	import { TAG_COLORS, type Item } from '../../../model';
	import ItemLabel from './ItemLabel.svelte';
	export let Hst: HstType;

	const item: Item = {
		name: 'name',
		level: 1,
		quarter: 1,
		index: 1,
		x: 0,
		y: 0,
		tags: ['dev', 'test']
	};
	let duplicate = false;
	let selected = false;
	let colorMap = { dev: TAG_COLORS[0] };

	function select(event: CustomEvent) {
		logEvent('select', event);
	}

	function edit(event: CustomEvent) {
		logEvent('edit', event);
	}
</script>

<Hst.Story>
	<ItemLabel {item} {duplicate} {selected} {colorMap} on:select={select} on:edit={edit} />

	<svelte:fragment slot="controls">
		<Hst.Checkbox bind:value={duplicate} title="Duplicate" />
		<Hst.Checkbox bind:value={selected} title="Selected" />
	</svelte:fragment>
</Hst.Story>
