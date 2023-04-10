<script lang="ts">
	import { addTag, removeTag } from '../../model';
	import { createEventDispatcher } from 'svelte';
	import type { TagColors } from '../../model';
	import PlusIcon from './icons/PlusIcon.svelte';

	const dispatch = createEventDispatcher();

	export let tags: string[];
	export let existingTags: string[] = [];
	export let colorMap: TagColors = {};

	let input: HTMLInputElement;

	function change(newTags: string[]) {
		dispatch('change', {
			tags: newTags
		});
	}

	function addNewTag() {
		const value = input.value.trim();
		if (!value) {
			return;
		}
		setTimeout(() => {
			tags = addTag(value, tags);
			input.value = '';
			change(tags);
		}, 100);
	}

	function handleAddTag() {
		addNewTag();
	}

	function add(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			addNewTag();
		}
	}

	function remove(tag: string) {
		return () => {
			tags = removeTag(tag, tags);
			change(tags);
		};
	}
</script>

<div class="space-x-1">
	{#each tags as tag}
		<span
			class="badge badge-accent badge-lg whitespace-nowrap pr-0"
			style="background-color: {colorMap[tag] || '#cccccc'}"
		>
			{tag}
			<button type="button" class="btn-ghost btn-xs btn" on:click={remove(tag)} tabindex="-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-4 w-4 stroke-current"
					><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</span>
	{/each}

	<div class="inline-block">
		<label class="input-group-sm input-group">
			<input
				type="text"
				list="tag_editor"
				autocomplete="false"
				class="input-bordered input input-sm"
				placeholder="Add a tag"
				on:keydown={add}
				bind:this={input}
			/>
			<button type="button" on:click={handleAddTag} class="btn-outline btn-accent btn-square btn-sm btn" tabindex="-1"
				><PlusIcon /></button
			>
		</label>
		<datalist id="tag_editor">
			{#each existingTags as tag}
				<option value={tag}>{tag}</option>
			{/each}
		</datalist>
	</div>
</div>
