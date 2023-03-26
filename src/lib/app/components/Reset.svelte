<script lang="ts">
	import PlusIcon from './icons/PlusIcon.svelte';
	import AutoConfirm from './AutoConfirm.svelte';

	export let reset;
</script>

<AutoConfirm duration={2000} on:confirm={reset}>
	<span slot="confirm">Actual data will be lost. Confirm</span>
	<PlusIcon />
	New radar
</AutoConfirm>
