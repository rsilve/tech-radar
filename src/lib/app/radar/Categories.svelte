<script lang="ts">
	import { getContext } from 'svelte';
	import type { AppContext } from '../../stores';
	import { GLOBAL_CONTEXT } from '../GlobalContext';

	const { categories } = getContext<AppContext>(GLOBAL_CONTEXT);
</script>

<div class="absolute top-0 right-0">
	<div class="whitespace-pre text-right opacity-50">
		{$categories['1']}
	</div>
</div>
<div class="absolute top-0 left-0">
	<div class="whitespace-pre text-left opacity-50">
		{$categories['2']}
	</div>
</div>
<div class="absolute bottom-0 left-0">
	<div class="whitespace-pre text-left opacity-50">
		{$categories['3']}
	</div>
</div>
<div class="absolute bottom-0 right-0">
	<div class="whitespace-pre text-right opacity-50">
		{$categories['4']}
	</div>
</div>
