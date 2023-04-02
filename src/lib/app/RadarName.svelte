<script lang="ts">
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from './GlobalContext';
	import EditIcon from './components/icons/EditIcon.svelte';
	import type { AppContext } from '../stores';

	const { radar } = getContext<AppContext>(GLOBAL_CONTEXT);
</script>

<div class="m-auto flex w-96 flex-row items-center gap-2 pb-3 text-center">
	<span class="text-accent">Radar's name</span>
	<input bind:value={$radar.name} class="flex-1 border-b outline-none" tabindex="-1" type="text" />
	<span class="text-accent print:hidden" tabindex="-1">
		<EditIcon />
	</span>
</div>
