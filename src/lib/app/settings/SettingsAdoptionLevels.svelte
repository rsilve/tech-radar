<script lang="ts">
	import type { AdoptionLevels } from '../../model';

	export let levels: AdoptionLevels;
	export let origin: AdoptionLevels;
</script>

<div>Configure adoption level labels :</div>
<div class="grid grid-cols-4 gap-x-4 pl-8">
	<div class="form-control w-full max-w-xs">
		<label class="label" for="adopt">
			<span class="label-text">{origin[1]}</span>
			<span
				class="label-text-alt cursor-pointer"
				on:click={() => (levels[1] = origin[1])}
				on:keypress={() => (levels[1] = origin[1])}>reset</span
			>
		</label>
		<input bind:value={levels[1]} class="input-bordered input" id="adopt" placeholder="Type here" type="text" />
	</div>

	<div class="form-control w-full max-w-xs">
		<label class="label" for="trial">
			<span class="label-text">{origin[2]}</span>
			<span
				class="label-text-alt cursor-pointer"
				on:click={() => (levels[2] = origin[2])}
				on:keypress={() => (levels[2] = origin[2])}>reset</span
			>
		</label>
		<input bind:value={levels[2]} class="input-bordered input" id="trial" placeholder="Type here" type="text" />
	</div>

	<div class="form-control w-full max-w-xs">
		<label class="label" for="assess">
			<span class="label-text">{origin[3]}</span>
			<span
				class="label-text-alt cursor-pointer"
				on:click={() => (levels[3] = origin[3])}
				on:keypress={() => (levels[3] = origin[3])}>reset</span
			>
		</label>
		<input bind:value={levels[3]} class="input-bordered input" id="assess" placeholder="Type here" type="text" />
	</div>

	<div class="form-control w-full max-w-xs">
		<label class="label" for="hold">
			<span class="label-text">{origin[4]}</span>
			<span
				class="label-text-alt cursor-pointer"
				on:click={() => (levels[4] = origin[4])}
				on:keypress={() => (levels[4] = origin[4])}>reset</span
			>
		</label>
		<input bind:value={levels[4]} class="input-bordered input" id="hold" placeholder="Type here" type="text" />
	</div>
</div>
