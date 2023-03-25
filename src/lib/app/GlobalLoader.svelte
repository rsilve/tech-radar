<script lang="ts">
	import { loader } from '../stores';
	import { setContext } from 'svelte';

	let context = loader.load();
	context.items.subscribe((items) => loader.updateItems(items));
	context.adoptionLevels.subscribe((levels) => loader.updateLevels(levels));

	setContext('global-context', context);
</script>

<slot />
