<script lang="ts">
	import { createEventDispatcher } from 'svelte';

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
	<div class="bg-warning text-warning-content" on:click={confirm}>
		{#if $$slots.confirm}
			<slot name="confirm" />
		{:else}
			<span>Confirm</span>
		{/if}
	</div>
{:else}
	<input type="checkbox" id="zz" class="hidden" on:change={askConfirm} />
	<label for="zz">
		<slot />
	</label>
{/if}
