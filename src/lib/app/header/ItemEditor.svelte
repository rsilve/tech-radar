<script lang="ts">
    import type { Item, Level, Quarter } from '../../model'
    import { colorMap, index, items, selected, tags } from '../../stores'
    import ModalFooter from '../components/ModalFooter.svelte'
    import { navigate, useFocus } from 'svelte-navigator'
    import TagsInput from '../components/TagsInput.svelte'
    import CheatSheet from '../components/CheatSheet.svelte'
    import ArrowLabel from '../components/ArrowLabel.svelte'

    export let id: number = undefined

    items.select(id)

    const defaultItem: Partial<Item> = id
        ? $selected
        : { name: '', x: 0, y: 0, quarter: 1, level: 1 }
    let name: string = defaultItem?.name
    let quarter: Quarter = defaultItem?.quarter || 1
    let level: Level = defaultItem?.level || 1
    let direction: -1 | 1 | undefined = defaultItem?.direction
    let itemTags: string[] = defaultItem?.tags || []

    if (id && !$selected) {
        cancel()
    }

    const registerFocus = useFocus()

    function submit() {
        if (!name || name.trim().length === 0) {
            return
        }
        if (id) {
            enhanced.update({
                ...defaultItem,
                name: name.trim(),
                quarter,
                level,
                direction,
                index: $selected.index,
                tags: itemTags,
            } as Item)
        } else {
            enhanced.add({
                ...defaultItem,
                name: name.trim(),
                quarter,
                level,
                direction,
                index: $index,
                tags: itemTags,
            } as Item)
        }
        cancel()
    }

    function remove() {
        if (id) {
            enhanced.remove($selected.index)
        }
        cancel()
    }
    function cancel() {
        name = undefined
        quarter = 1
        level = 1
        $selected = undefined
        navigate('/')
    }

    function onTagsChange(event: CustomEvent) {
        itemTags = event.detail.tags
    }
</script>

<div>
    <form on:submit|preventDefault={submit}>
        <div
            class="grid grid-cols-[max-content_1fr] items-center gap-x-4 gap-y-2"
        >
            <span>Name</span>
            <input
                type="text"
                use:registerFocus
                bind:value={name}
                class="input-bordered input w-2/3"
                placeholder="React, Git, TDD, ..."
            />

            <span>Level</span>
            <div class="flex w-full items-center gap-4">
                <label class="label cursor-pointer">
                    <input
                        type="radio"
                        class="radio mr-1"
                        bind:group={level}
                        name="level"
                        value={1}
                    />
                    Adopt
                </label>
                <label class="label cursor-pointer">
                    <input
                        type="radio"
                        class="radio mr-1"
                        bind:group={level}
                        name="level"
                        value={2}
                    />
                    Trial
                </label>
                <label class="label cursor-pointer">
                    <input
                        type="radio"
                        class="radio mr-1"
                        bind:group={level}
                        name="level"
                        value={3}
                    />
                    Assess
                </label>
                <label class="label cursor-pointer">
                    <input
                        type="radio"
                        class="radio mr-1"
                        bind:group={level}
                        name="level"
                        value={4}
                    />
                    Hold
                </label>
                <div class="flex-grow text-right">
                    <ArrowLabel for="cheatsheet">
                        Cheat sheet suggestion
                    </ArrowLabel>
                </div>
            </div>
            <div
                class="col-span-2 h-0 overflow-hidden transition-all duration-1000"
            >
                <input
                    id="cheatsheet"
                    type="checkbox"
                    class="hidden"
                    tabindex="-1"
                />
                <div>
                    <CheatSheet bind:level />
                </div>
            </div>

            <span>Category</span>
            <div class="flex items-center gap-4">
                <label class="label cursor-pointer">
                    <input
                        type="radio"
                        class="radio mr-1"
                        bind:group={quarter}
                        name="quarter"
                        value={1}
                    />
                    Language
                </label>
                <label class="label cursor-pointer">
                    <input
                        type="radio"
                        class="radio mr-1"
                        bind:group={quarter}
                        name="quarter"
                        value={2}
                    />
                    Tools
                </label>
                <label class="label cursor-pointer">
                    <input
                        type="radio"
                        class="radio mr-1"
                        bind:group={quarter}
                        name="quarter"
                        value={3}
                    />
                    Plateform
                </label>
                <label class="label cursor-pointer">
                    <input
                        type="radio"
                        class="radio mr-1"
                        bind:group={quarter}
                        name="quarter"
                        value={4}
                    />
                    Technique
                </label>
            </div>

            <span>Direction</span>
            <div class="flex items-center gap-4">
                <label class="label cursor-pointer">
                    <input
                        type="radio"
                        class="radio mr-1"
                        bind:group={direction}
                        name="direction"
                        value={1}
                    />
                    Go in
                </label>
                <label class="label cursor-pointer">
                    <input
                        type="radio"
                        class="radio mr-1"
                        bind:group={direction}
                        name="direction"
                        value={-1}
                    />
                    Go out
                </label>
                <label class="label cursor-pointer">
                    <input
                        type="radio"
                        class="radio mr-1"
                        bind:group={direction}
                        name="direction"
                        value={undefined}
                    />
                    None
                </label>
            </div>

            <span>Tags</span>
            <div>
                <TagsInput
                    tags={itemTags}
                    existingTags={$tags}
                    colorMap={$colorMap}
                    on:change={onTagsChange}
                />
            </div>
        </div>
        <ModalFooter>
            {#if id}
                <button
                    type="button"
                    on:click={remove}
                    class="btn-outline btn"
                    tabindex="-1"
                >
                    Delete
                </button>
            {/if}
            <span class="flex-grow" />
            <button type="button" on:click={submit} class="btn">
                {#if id}Update{:else}Add{/if}
            </button>
            <button type="button" on:click={cancel} class="btn-outline btn">
                Cancel
            </button>
        </ModalFooter>
    </form>
</div>

<style>
    div:has(> input[type='checkbox']:checked) {
        height: auto;
    }
</style>
