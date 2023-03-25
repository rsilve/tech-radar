<script lang="ts">
	import { loader } from '../stores';
	import { setContext } from 'svelte';

	let context = loader.load();

	context.items.subscribe((items) => loader.persist(items));
	setContext('global-context', context);
</script>

<slot />
