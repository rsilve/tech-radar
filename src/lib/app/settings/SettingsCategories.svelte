<script lang="ts">
	import type { Categories } from '../../model';

	export let categories: Categories;
	export let origin: Categories;
</script>

<div>Configure categories labels :</div>
<div class="grid grid-cols-4 gap-x-4 pl-8">
	<div class="form-control w-full max-w-xs">
		<label class="label" for="language">
			<span class="label-text">{origin[1]}</span>
			<span
				class="label-text-alt cursor-pointer"
				on:click={() => (categories[1] = origin[1])}
				on:keypress={() => (categories[1] = origin[1])}>reset</span
			>
		</label>
		<textarea bind:value={categories[1]} class="textarea-bordered textarea" id="language" placeholder="Type here" />
	</div>

	<div class="form-control w-full max-w-xs">
		<label class="label" for="tools">
			<span class="label-text">{origin[2]}</span>
			<span
				class="label-text-alt cursor-pointer"
				on:click={() => (categories[2] = origin[2])}
				on:keypress={() => (categories[2] = origin[2])}>reset</span
			>
		</label>
		<textarea bind:value={categories[2]} class="textarea-bordered textarea" id="tools" placeholder="Type here" />
	</div>

	<div class="form-control w-full max-w-xs">
		<label class="label" for="plateform">
			<span class="label-text">{origin[3]}</span>
			<span
				class="label-text-alt cursor-pointer"
				on:click={() => (categories[3] = origin[3])}
				on:keypress={() => (categories[3] = origin[3])}>reset</span
			>
		</label>
		<textarea bind:value={categories[3]} class="textarea-bordered textarea" id="plateform" placeholder="Type here" />
	</div>

	<div class="form-control w-full max-w-xs">
		<label class="label" for="technique">
			<span class="label-text">{origin[4]}</span>
			<span
				class="label-text-alt cursor-pointer"
				on:click={() => (categories[4] = origin[4])}
				on:keypress={() => (categories[4] = origin[4])}>reset</span
			>
		</label>
		<textarea bind:value={categories[4]} class="textarea-bordered textarea" id="technique" placeholder="Type here" />
	</div>
</div>
