<script lang="ts">
	import GearIcon from '../components/icons/GearIcon.svelte';
	import { navigate } from 'svelte-navigator';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function openSettings(event) {
		navigate('/settings');
		dispatch('click', event.detail);
	}
</script>

<div class="cursor-pointer whitespace-nowrap pt-2 pb-2" on:click={openSettings} on:keydown={openSettings}>
	<GearIcon />
	Settings
</div>
