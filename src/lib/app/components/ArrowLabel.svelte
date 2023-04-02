<script lang="ts">
	let forLabel = '__no_id';
	export { forLabel as for };

	let up = false;

	function handleToggle() {
		up = !up;
	}
</script>

<label class="cursor-pointer gap-2" for={forLabel} on:click={handleToggle} on:keypress={handleToggle}>
	<slot />
	<input bind:checked={up} class="hidden" tabindex="-1" type="checkbox" />
	<span>
		<i class="arrow" />
	</span>
</label>

<style>
	.arrow {
		border: solid black;
		border-width: 0 0.2rem 0.2rem 0;
		display: inline-block;
		padding: 0.2rem;
		margin: 0.2rem;
		grid-column: 1;
		grid-row: 1;
		transform: rotate(45deg);
	}

	input[type='checkbox']:checked ~ span > .arrow {
		transform: rotate(-135deg) translateX(-0.4rem);
	}
</style>
