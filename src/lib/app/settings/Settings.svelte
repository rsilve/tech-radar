<script lang="ts">
	import ModalFooter from '../components/ModalFooter.svelte';
	import { navigate } from 'svelte-navigator';
	import { adoptionLevels as originLevels } from '../../model';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from '../GlobalContext';
	import type { AppContext } from '../../stores';
	import SettingsAdoptionLevels from './SettingsAdoptionLevels.svelte';

	const { adoptionLevels } = getContext<AppContext>(GLOBAL_CONTEXT);

	let levels = { ...originLevels, ...$adoptionLevels };

	function cancel() {
		navigate('/');
	}

	function submit() {
		adoptionLevels.update(() => levels);
		navigate('/');
	}
</script>

<div>
	<h1 class="mb-0.5 mt-2 text-xl font-bold">Settings</h1>
	<form on:submit|preventDefault={submit}>
		<SettingsAdoptionLevels {levels} origin={originLevels} />
	</form>

	<ModalFooter>
		<button class="btn" on:click={submit} type="button"> Apply</button>
		<button class="btn-outline btn" on:click={cancel} type="button"> Close</button>
	</ModalFooter>
</div>
