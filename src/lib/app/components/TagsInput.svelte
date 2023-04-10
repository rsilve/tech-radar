<script lang="ts">
	import { addTag, removeTag } from '../../model';
	import { createEventDispatcher } from 'svelte';
	import type { TagColors } from '../../model';
	import PlusIcon from './icons/PlusIcon.svelte';

	const dispatch = createEventDispatcher();

	export let tags: string[];
	export let existingTags: string[] = [];
	export let colorMap: TagColors = {};

	function change(newTags: string[]) {
		dispatch('change', {
			tags: newTags
		});
	}

	function add(event: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		if (event.key === 'Enter') {
			const el = event.currentTarget;
			const value = el.value.trim();
			if (!value) {
				return;
			}
			setTimeout(() => {
				tags = addTag(value, tags);
				el.value = '';
				change(tags);
			}, 100);
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
			class="badge-accent badge badge-lg whitespace-nowrap pr-0"
			style="background-color: {colorMap[tag] || '#cccccc'}"
		>
			{tag}
			<button class="btn-ghost btn-xs btn" on:click={remove(tag)} tabindex="-1">
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
			<PlusIcon />
			<input
				type="text"
				list="tag_editor"
				autocomplete="false"
				class="input-bordered input input-sm"
				placeholder="Add a tag"
				on:keydown={add}
			/>
		</label>
		<datalist id="tag_editor">
			{#each existingTags as tag}
				<option value={tag}>{tag}</option>
			{/each}
		</datalist>
	</div>
</div>
