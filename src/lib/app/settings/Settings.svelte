<script lang="ts">
	import ModalFooter from '../components/ModalFooter.svelte';
	import { navigate } from 'svelte-navigator';
	import { adoptionLevels as origin } from '../../model';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from '../GlobalContext';
	import type { AppContext } from '../../stores';

	const { adoptionLevels } = getContext<AppContext>(GLOBAL_CONTEXT);

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
		<div>Configure adoption level labels :</div>
		<div class="grid grid-cols-4 gap-x-4 pl-8">
			<div class="form-control w-full max-w-xs">
				<label class="label" for="adopt">
					<span class="label-text">{origin[1]}</span>
					<span class="label-text-alt"
						><a class="cursor-pointer" on:click={() => (levels[1] = origin[1])} tabindex="-1">reset</a></span
					>
				</label>
				<input bind:value={levels[1]} class="input-bordered input" id="adopt" placeholder="Type here" type="text" />
			</div>

			<div class="form-control w-full max-w-xs">
				<label class="label" for="trial">
					<span class="label-text">{origin[2]}</span>
					<span class="label-text-alt"
						><a class="cursor-pointer" on:click={() => (levels[2] = origin[2])} tabindex="-1">reset</a></span
					>
				</label>
				<input bind:value={levels[2]} class="input-bordered input" id="trial" placeholder="Type here" type="text" />
			</div>

			<div class="form-control w-full max-w-xs">
				<label class="label" for="assess">
					<span class="label-text">{origin[3]}</span>
					<span class="label-text-alt"
						><a class="cursor-pointer" on:click={() => (levels[3] = origin[3])} tabindex="-1">reset</a></span
					>
				</label>
				<input bind:value={levels[3]} class="input-bordered input" id="assess" placeholder="Type here" type="text" />
			</div>

			<div class="form-control w-full max-w-xs">
				<label class="label" for="hold">
					<span class="label-text">{origin[4]}</span>
					<span class="label-text-alt"
						><a class="cursor-pointer" on:click={() => (levels[4] = origin[4])} tabindex="-1">reset</a></span
					>
				</label>
				<input bind:value={levels[4]} class="input-bordered input" id="hold" placeholder="Type here" type="text" />
			</div>
		</div>
	</form>

	<ModalFooter>
		<button class="btn" on:click={submit} type="button"> Apply</button>
		<button class="btn-outline btn" on:click={cancel} type="button"> Close</button>
	</ModalFooter>
</div>
