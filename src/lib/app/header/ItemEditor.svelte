<script lang="ts">
	import type { Item, Level, Quarter } from '../../model';
	import { addOrUpdateItem, DEFAULT_ITEM, removeItem } from '../../model';
	import { type AppContext, selected } from '../../stores';
	import ModalFooter from '../components/ModalFooter.svelte';
	import { navigate, useFocus } from 'svelte-navigator';
	import TagsInput from '../components/TagsInput.svelte';
	import CheatSheet from './CheatSheet.svelte';
	import ArrowLabel from '../components/ArrowLabel.svelte';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from '../GlobalContext';

	const { items, index, colorMap, tags } = getContext<AppContext>(GLOBAL_CONTEXT);

	export let id: string | undefined = undefined;

	$selected = $items.find((v: Item) => v.index === id);

	const defaultItem: Partial<Item> = id ? $selected : DEFAULT_ITEM();
	let name: string = defaultItem?.name;
	let quarter: Quarter = defaultItem?.quarter || 1;
	let level: Level = defaultItem?.level || 1;
	let direction: -1 | 1 | undefined = defaultItem?.direction;
	let itemTags: string[] = defaultItem?.tags || [];
	let comment = defaultItem.comment;

	if (id && !$selected) {
		cancel();
	}

	const registerFocus = useFocus();

	function submit() {
		if (!name || name.trim().length === 0) {
			return;
		}
		items.update((list) => {
			return addOrUpdateItem(list, {
				...defaultItem,
				name: name.trim(),
				quarter,
				level,
				direction,
				tags: itemTags,
				comment
			} as Item);
		});
		cancel();
	}

	function remove() {
		if (id) {
			items.update((list) => removeItem(list, $selected.index));
		}
		cancel();
	}

	function cancel() {
		name = undefined;
		quarter = 1;
		level = 1;
		comment = undefined;
		$selected = undefined;
		navigate('/');
	}

	function onTagsChange(event: CustomEvent) {
		itemTags = event.detail.tags;
	}
</script>

<div>
	<form on:submit|preventDefault={submit}>
		<div class="grid grid-cols-[max-content_1fr] items-center gap-x-4 gap-y-2">
			<span>Name</span>
			<input
				bind:value={name}
				class="input-bordered input w-2/3"
				placeholder="React, Git, TDD, ..."
				type="text"
				use:registerFocus
			/>

			<span>Level</span>
			<div class="flex w-full items-center gap-4">
				<label class="label cursor-pointer">
					<input bind:group={level} class="radio mr-1" name="level" type="radio" value={1} />
					Adopt
				</label>
				<label class="label cursor-pointer">
					<input bind:group={level} class="radio mr-1" name="level" type="radio" value={2} />
					Trial
				</label>
				<label class="label cursor-pointer">
					<input bind:group={level} class="radio mr-1" name="level" type="radio" value={3} />
					Assess
				</label>
				<label class="label cursor-pointer">
					<input bind:group={level} class="radio mr-1" name="level" type="radio" value={4} />
					Hold
				</label>
				<div class="flex-grow text-right">
					<ArrowLabel for="cheatsheet">Cheat sheet suggestion</ArrowLabel>
				</div>
			</div>
			<div class="col-span-2 h-0 overflow-hidden transition-all duration-1000">
				<input class="hidden" id="cheatsheet" tabindex="-1" type="checkbox" />
				<div>
					<CheatSheet bind:level />
				</div>
			</div>

			<span>Category</span>
			<div class="flex items-center gap-4">
				<label class="label cursor-pointer">
					<input bind:group={quarter} class="radio mr-1" name="quarter" type="radio" value={1} />
					Language
				</label>
				<label class="label cursor-pointer">
					<input bind:group={quarter} class="radio mr-1" name="quarter" type="radio" value={2} />
					Tools
				</label>
				<label class="label cursor-pointer">
					<input bind:group={quarter} class="radio mr-1" name="quarter" type="radio" value={3} />
					Plateform
				</label>
				<label class="label cursor-pointer">
					<input bind:group={quarter} class="radio mr-1" name="quarter" type="radio" value={4} />
					Technique
				</label>
			</div>

			<span>Direction</span>
			<div class="flex items-center gap-4">
				<label class="label cursor-pointer">
					<input bind:group={direction} class="radio mr-1" name="direction" type="radio" value={1} />
					Go in
				</label>
				<label class="label cursor-pointer">
					<input bind:group={direction} class="radio mr-1" name="direction" type="radio" value={-1} />
					Go out
				</label>
				<label class="label cursor-pointer">
					<input bind:group={direction} class="radio mr-1" name="direction" type="radio" value={undefined} />
					None
				</label>
			</div>

			<span>Tags</span>
			<div>
				<TagsInput colorMap={$colorMap} existingTags={$tags} on:change={onTagsChange} tags={itemTags} />
			</div>

			<span class="self-start pt-3">Comment</span>
			<div class="self-start">
				<textarea bind:value={comment} class="textarea-bordered textarea w-full" />
			</div>
		</div>
		<ModalFooter>
			{#if id}
				<button type="button" on:click={remove} class="btn-outline btn" tabindex="-1"> Delete</button>
			{/if}
			<span class="flex-grow" />
			<button class="btn" on:click={submit} type="button">
				{#if id}Update{:else}Add{/if}
			</button>
			<button class="btn-outline btn" on:click={cancel} type="button"> Cancel</button>
		</ModalFooter>
	</form>
</div>

<style>
	div:has(> input[type='checkbox']:checked) {
		height: auto;
	}
</style>
