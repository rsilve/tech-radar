<script lang="ts">
	import ModalFooter from '../components/ModalFooter.svelte';
	import { navigate } from 'svelte-navigator';
	import { adoptionLevels as originLevels, categories as originCategories } from '../../model';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from '../GlobalContext';
	import type { AppContext } from '../../stores';
	import SettingsAdoptionLevels from './SettingsAdoptionLevels.svelte';
	import SettingsCategories from './SettingsCategories.svelte';

	const { adoptionLevels, categories } = getContext<AppContext>(GLOBAL_CONTEXT);

	let levels = { ...originLevels, ...$adoptionLevels };
	let categoryLabels = { ...originCategories, ...$categories };

	function cancel() {
		navigate('/');
	}

	function submit() {
		adoptionLevels.update(() => levels);
		categories.update(() => categoryLabels);
		navigate('/');
	}
</script>

<div>
	<h1 class="mb-0.5 mt-2 text-xl font-bold">Settings</h1>
	<p class="text-accent">
		Configure your radar. Configuration will be store with the current radar. It does not affect other radar.
	</p>
	<span class="divider" />
	<form on:submit|preventDefault={submit}>
		<SettingsAdoptionLevels {levels} origin={originLevels} />
		<span class="divider" />
		<SettingsCategories categories={categoryLabels} origin={originCategories} />
	</form>
	<span class="divider" />
	<ModalFooter>
		<button class="btn" on:click={submit} type="button"> Apply</button>
		<button class="btn-outline btn" on:click={cancel} type="button"> Close</button>
	</ModalFooter>
</div>
