<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Target from './Target.svelte';
	import { createContext } from '../GlobalContext';

	export let Hst: HstType;

	createContext();
</script>

<Hst.Story>
	<div style="background: white; padding: 1em; height: 50%">
		<div style="position: relative; aspect-ratio: 1; border: 1px dotted #ccc; ">
			<Target />
		</div>
	</div>
</Hst.Story>
