<script lang="ts">
	import Categories from '../components/radar/Categories.svelte';
	import { createEventDispatcher, getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from '../GlobalContext';
	import type { AppContext } from '../../stores';

	const dispatch = createEventDispatcher();
	const { adoptionLevels } = getContext<AppContext>(GLOBAL_CONTEXT);

	function coordTop(radius: number) {
		return 100 / 2 + (Math.cos(Math.PI / 6) * 100 * radius) / 10;
	}

	function coordLeft(radius: number) {
		return 100 / 2 + (Math.sin(Math.PI / 6) * 100 * radius) / 10;
	}

	function handleDragDrop(quarter, level) {
		return (e) => {
			e.preventDefault();
			dispatch('dropBlip', { quarter, level });
		};
	}
	function handleDragEnter() {
		/* do nothing */
	}
</script>

<Categories />

<div
	on:drop={handleDragDrop(4, 4)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-1/2  left-1/2 h-1/2 w-1/2 rounded-br-full border border-solid border-slate-300 bg-slate-100"
/>
<div
	on:drop={handleDragDrop(3, 4)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-1/2  left-0 h-1/2 w-1/2 rounded-bl-full border border-solid border-slate-300 bg-slate-100"
/>
<div
	on:drop={handleDragDrop(2, 4)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-0  left-0 h-1/2 w-1/2 rounded-tl-full border border-solid border-slate-300 bg-slate-100"
/>
<div
	on:drop={handleDragDrop(1, 4)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-0  left-1/2 h-1/2 w-1/2 rounded-tr-full border border-solid border-slate-300 bg-slate-100"
/>

<div
	on:drop={handleDragDrop(4, 3)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-1/2  left-1/2 h-[40%] w-[40%] rounded-br-full border border-solid border-slate-400 bg-slate-200"
/>
<div
	on:drop={handleDragDrop(3, 3)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-1/2  left-[10%] h-[40%] w-[40%] rounded-bl-full border border-solid border-slate-400 bg-slate-200"
/>
<div
	on:drop={handleDragDrop(2, 3)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-[10%]  left-[10%] h-[40%] w-[40%] rounded-tl-full border border-solid border-slate-400 bg-slate-200"
/>
<div
	on:drop={handleDragDrop(1, 3)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-[10%]  left-1/2 h-[40%] w-[40%] rounded-tr-full border border-solid border-slate-400 bg-slate-200"
/>

<div
	on:drop={handleDragDrop(4, 2)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-1/2  left-1/2 h-[30%] w-[30%] rounded-br-full border border-solid border-slate-500 bg-slate-300"
/>
<div
	on:drop={handleDragDrop(3, 2)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-1/2  left-[20%] h-[30%] w-[30%] rounded-bl-full border border-solid border-slate-500 bg-slate-300"
/>
<div
	on:drop={handleDragDrop(2, 2)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-[20%]  left-[20%] h-[30%] w-[30%] rounded-tl-full border border-solid border-slate-500 bg-slate-300"
/>
<div
	on:drop={handleDragDrop(1, 2)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-[20%]  left-1/2 h-[30%] w-[30%] rounded-tr-full border border-solid border-slate-500 bg-slate-300"
/>

<div
	on:drop={handleDragDrop(4, 1)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-1/2  left-1/2 h-[20%] w-[20%] rounded-br-full border border-solid border-slate-600 bg-slate-400"
/>
<div
	on:drop={handleDragDrop(3, 1)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-1/2  left-[30%] h-[20%] w-[20%] rounded-bl-full border border-solid border-slate-600 bg-slate-400"
/>
<div
	on:drop={handleDragDrop(2, 1)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-[30%]  left-[30%] h-[20%] w-[20%] rounded-tl-full border border-solid border-slate-600 bg-slate-400"
/>
<div
	on:drop={handleDragDrop(1, 1)}
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault|stopPropagation={() => {}}
	class="absolute top-[30%]  left-1/2 h-[20%] w-[20%] rounded-tr-full border border-solid border-slate-600 bg-slate-400"
/>

<div
	class="absolute -translate-y-6 -translate-x-6 -rotate-[30deg] text-xs uppercase opacity-50"
	style="top: {coordTop(2)}%; left: {coordLeft(2)}%; text-shadow: 0 0 20px white;"
>
	{$adoptionLevels['1']}
</div>
<div
	class="absolute -translate-y-6 -translate-x-6 -rotate-[30deg] text-xs uppercase opacity-50"
	style="top: {coordTop(3)}%; left: {coordLeft(3)}%; text-shadow: 0 0 20px white;"
>
	{$adoptionLevels['2']}
</div>
<div
	class="absolute -translate-y-6 -translate-x-6 -rotate-[30deg] text-xs uppercase opacity-50"
	style="top: {coordTop(4)}%; left: {coordLeft(4)}%; text-shadow: 0 0 20px white;"
>
	{$adoptionLevels['3']}
</div>
<div
	class="absolute -translate-y-6 -translate-x-6 -rotate-[30deg] text-xs uppercase opacity-50"
	style="top: {coordTop(5)}%; left: {coordLeft(5)}%; text-shadow: 0 0 20px white;"
>
	{$adoptionLevels['4']}
</div>
