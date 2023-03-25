<script lang="ts">
	import ModalFooter from '../components/ModalFooter.svelte';
	import { navigate } from 'svelte-navigator';
	import { adoptionLevels as origin } from '../../model';
	import { getContext } from 'svelte';

	const { adoptionLevels } = getContext('global-context');

	let levels = { ...origin, ...$adoptionLevels };
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
		<div>Configure the adoption levels label :</div>
		<div class="grid grid-cols-4 gap-x-4 pl-8">
			<div class="form-control w-full max-w-xs">
				<label class="label">
					<span class="label-text">{origin[1]}</span>
				</label>
				<input
					type="text"
					placeholder="Type here"
					class="input-bordered input"
					bind:value={levels[1]}
				/>
			</div>

			<div class="form-control w-full max-w-xs">
				<label class="label">
					<span class="label-text">{origin[2]}</span>
				</label>
				<input
					type="text"
					placeholder="Type here"
					class="input-bordered input"
					bind:value={levels[2]}
				/>
			</div>

			<div class="form-control w-full max-w-xs">
				<label class="label">
					<span class="label-text">{origin[3]}</span>
				</label>
				<input
					type="text"
					placeholder="Type here"
					class="input-bordered input"
					bind:value={levels[3]}
				/>
			</div>

			<div class="form-control w-full max-w-xs">
				<label class="label">
					<span class="label-text">{origin[4]}</span>
				</label>
				<input
					type="text"
					placeholder="Type here"
					class="input-bordered input"
					bind:value={levels[4]}
				/>
			</div>
		</div>
	</form>

	<ModalFooter>
		<button type="button" on:click={submit} class="btn"> Apply </button>
		<button type="button" on:click={cancel} class="btn-outline btn"> Close </button>
	</ModalFooter>
</div>
