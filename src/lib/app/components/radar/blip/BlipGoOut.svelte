<script lang="ts">
	import type { ItemEnhanced } from '../../../../model';
	import ArrowRightIcon from '../../icons/ArrowRightIcon.svelte';
	import { unitToRadial } from '../../../../utils';

	export let item: ItemEnhanced;
	let angle = 0;
	$: {
		angle = unitToRadial(item).x - Math.PI / 2;
	}
</script>

<div class="translate-x-5 text-neutral" style="grid-area: 1 / 1 / 2 / 2" style:rotate="-{angle}rad">
	<ArrowRightIcon />
</div>
