<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import { TAG_COLORS } from '../../../../model';
	import BlipTag from './BlipTag.svelte';

	export let Hst: HstType;
</script>

<Hst.Story>
	{#each TAG_COLORS as color}
		<BlipTag {color} />
	{/each}
</Hst.Story>
