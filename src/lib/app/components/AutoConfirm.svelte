<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const id = Math.random() * 1000;
	const dispatch = createEventDispatcher();
	export let duration = 1500;
	let waitConfirm = false;

	function askConfirm() {
		waitConfirm = true;
		setTimeout(() => {
			waitConfirm = false;
		}, duration);
	}

	function confirm() {
		waitConfirm = false;
		dispatch('confirm');
	}
</script>

{#if waitConfirm}
	<div class="cursor-pointer bg-warning text-warning-content" on:click={confirm}>
		{#if $$slots.confirm}
			<slot name="confirm" />
		{:else}
			<span>Confirm</span>
		{/if}
	</div>
{:else}
	<input type="checkbox" id="auto_reset_{id}" class="hidden" on:change={askConfirm} />
	<label for="auto_reset_{id}">
		<slot />
	</label>
{/if}
