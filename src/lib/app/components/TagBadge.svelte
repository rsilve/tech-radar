<script lang="ts">
	import type { TagColors } from '../../model';

	export let tag: string;
	export let count: number = undefined;
	export let colorMap: TagColors = {};
</script>

<span
	class="badge badge-xs"
	style="text-shadow: 0 0 1px black; background-color: {colorMap[tag] || '#cccccc'}"
>
	{tag}
	{count ?? ''}
</span>
