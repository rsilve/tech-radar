<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import { logEvent } from 'histoire/client';
	import { type Item, TAG_COLORS } from '../../../model';
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
	<ItemLabel {colorMap} {item} on:edit={edit} on:select={select} />
</Hst.Story>
