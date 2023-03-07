<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import { logEvent } from 'histoire/client';
	import type { Item } from '../../../../model';
	import BlipNumber from './BlipNumber.svelte';

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

	function select(event: CustomEvent) {
		logEvent('select', event);
	}

	function edit(event: CustomEvent) {
		logEvent('edit', event);
	}
</script>

<Hst.Story>
	<BlipNumber {item} on:select={select} on:edit={edit} />
</Hst.Story>
