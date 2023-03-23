<script lang="ts">
	import ModalFooter from '../components/ModalFooter.svelte';
	import { navigate } from 'svelte-navigator';

	function cancel() {
		navigate('/');
	}
</script>

<div>
	<h1>Settings</h1>

	<ModalFooter>
		<button type="button" on:click={cancel} class="btn-outline btn"> Close </button>
	</ModalFooter>
</div>
