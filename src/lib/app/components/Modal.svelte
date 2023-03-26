<script lang="ts">
	import { navigate } from 'svelte-navigator';

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			navigate('/');
		}
	}
</script>

<svelte:body on:keydown={handleKeydown} />

<div class="modal modal-open">
	<div class="modal-box m-auto w-11/12 max-w-5xl">
		<slot />
	</div>
</div>
