<script lang="ts">
    import type {Item, Level, Quarter} from "../model";
    import {edited, index, items, selected} from '../stores';
    import ModalFooter from "../components/ModalFooter.svelte";
    import {navigate, useFocus} from "svelte-navigator";

    export let id: number = undefined
    const defaultItem: Partial<Item> = id ? $selected : {x: 0, y: 0, quarter: 1, level: 1}
    let name: string = defaultItem.name
    let quarter: Quarter = defaultItem.quarter
    let level: Level = defaultItem.level
    let direction: -1 | 1 | undefined = defaultItem.direction

    const registerFocus = useFocus();

    function submit() {
        if (!name || name.trim().length === 0) {
            return
        }
        if (id) {
            items.update({...defaultItem, name: name.trim(), quarter, level, direction, index: $selected.index} as Item)
        } else {
            items.add({...defaultItem, name: name.trim(), quarter, level, direction, index: $index} as Item)
        }
        cancel()
    }

    function remove() {
        if (id) {
            items.remove($selected.index)
        }
        cancel()
    }
    function cancel() {
        name = undefined;
        quarter = 1
        level = 1
        $edited = undefined
        $selected = undefined
        navigate("/")
    }




</script>


<div>
    <form on:submit|preventDefault={submit}>
        <div class="grid grid-cols-[max-content_1fr] items-center gap-x-4 gap-y-2">
            <span>Name</span>
            <input type="text" use:registerFocus
                   bind:value={name}
                   class="input input-bordered w-2/3"
                   placeholder="React, Git, TDD, ...">


            <span>Level</span>
            <div class="flex gap-4 items-center">
                <label class="label cursor-pointer">
                    <input type="radio" class="radio mr-1" bind:group={level} name="level" value={1}>
                    Adopt
                </label>
                <label class="label cursor-pointer">
                    <input type="radio" class="radio mr-1" bind:group={level} name="level" value={2}>
                    Trial
                </label>
                <label class="label cursor-pointer">
                    <input type="radio" class="radio mr-1" bind:group={level} name="level" value={3}>
                    Assess
                </label>
                <label class="label cursor-pointer">
                    <input type="radio" class="radio mr-1" bind:group={level} name="level" value={4}>
                    Hold
                </label>
            </div>

            <span>Category</span>
            <div class="flex gap-4 items-center">

                <label class="label cursor-pointer">
                    <input type="radio" class="radio mr-1" bind:group={quarter} name="quarter" value={1}>
                    Language
                </label>
                <label class="label cursor-pointer">
                    <input type="radio" class="radio mr-1" bind:group={quarter} name="quarter" value={2}>
                    Tools
                </label>
                <label class="label cursor-pointer">
                    <input type="radio" class="radio mr-1" bind:group={quarter} name="quarter" value={3}>
                    Plateform
                </label>
                <label class="label cursor-pointer">
                    <input type="radio" class="radio mr-1" bind:group={quarter} name="quarter" value={4}>
                    Technique
                </label>
            </div>

            <span>Direction</span>
            <div class="flex gap-4 items-center">

                <label class="label cursor-pointer">
                    <input type="radio" class="radio mr-1" bind:group={direction} name="direction" value={1}>
                    Go in
                </label>
                <label class="label cursor-pointer">
                    <input type="radio" class="radio mr-1" bind:group={direction} name="direction" value={-1}>
                    Go out
                </label>
                <label class="label cursor-pointer">
                    <input type="radio" class="radio mr-1" bind:group={direction} name="direction" value={undefined}>
                    None
                </label>

            </div>
        </div>
        <ModalFooter>
            {#if id}
                <button type="button" on:click={remove} class="btn btn-outline">
                    Delete
                </button>
            {/if}
            <span class="flex-grow"></span>
            <button type="button" on:click={submit} class="btn">
                {#if id}Update{:else}Add{/if}
            </button>
            <button type="button" on:click={cancel} class="btn btn-outline">
                Cancel
            </button>
        </ModalFooter>
    </form>

</div>


