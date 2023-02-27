<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Home from './Home.svelte';
	export let Hst: HstType;
</script>

<Hst.Story>
	<Home id="menu" />
	menu open : <input type="checkbox" id="menu" />
</Hst.Story>
