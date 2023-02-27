<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import ArrowLabel from './ArrowLabel.svelte';

	export let Hst: HstType;
</script>

<Hst.Story>
	<ArrowLabel>text</ArrowLabel><br />
	<ArrowLabel for="test">text</ArrowLabel>
	<input type="checkbox" id="test" />
</Hst.Story>
