<script lang="ts">
	export let id = 'app-drawer';
</script>

<div class="flex items-center">
	<label for={id} class="btn-ghost btn text-4xl active:btn-primary">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"
			><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg
		>
	</label>
	<div class="ml-4">
		<h1 class="-mt-2 text-4xl font-bold">Tech Radar</h1>
		<small class="-mt-1 block h-2 leading-none"> A map for your team's technologies </small>
	</div>
</div>
