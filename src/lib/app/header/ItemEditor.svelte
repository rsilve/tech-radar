<script lang="ts">
    import type { Item, Level, Quarter } from "../../model";
    import { edited, index, items, selected } from "../../stores";
    import ModalFooter from "../components/ModalFooter.svelte";
    import { navigate, useFocus } from "svelte-navigator";
    import { unique } from "radash";

    export let id: number = undefined;
    const defaultItem: Partial<Item> = id
        ? $selected
        : { x: 0, y: 0, quarter: 1, level: 1 };
    let name: string = defaultItem.name;
    let quarter: Quarter = defaultItem.quarter;
    let level: Level = defaultItem.level;
    let direction: -1 | 1 | undefined = defaultItem.direction;
    let tags: string[] = defaultItem.tags || [];

    const registerFocus = useFocus();

    function submit() {
        if (!name || name.trim().length === 0) {
            return;
        }
        if (id) {
            items.update({
                ...defaultItem,
                name: name.trim(),
                quarter,
                level,
                direction,
                index: $selected.index,
                tags,
            } as Item);
        } else {
            items.add({
                ...defaultItem,
                name: name.trim(),
                quarter,
                level,
                direction,
                index: $index,
                tags,
            } as Item);
        }
        cancel();
    }

    function remove() {
        if (id) {
            items.remove($selected.index);
        }
        cancel();
    }
    function cancel() {
        name = undefined;
        quarter = 1;
        level = 1;
        $edited = undefined;
        $selected = undefined;
        navigate("/");
    }

    function addTag(
        event: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }
    ) {
        if (event.key === "Enter") {
            tags = unique([...tags, event.currentTarget.value], (item) =>
                item.toUpperCase()
            ).sort();
            event.currentTarget.value = "";
            event.currentTarget.focus();
        }
    }

    function removeTag(tag: string) {
        return () => {
            const filtered = tags.filter(
                (item) => item.toUpperCase() !== tag.toUpperCase()
            );
            tags = [...filtered];
        };
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
                class="input input-bordered w-2/3"
                placeholder="React, Git, TDD, ..."
            />

            <span>Level</span>
            <div class="flex gap-4 items-center">
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
            </div>

            <span>Category</span>
            <div class="flex gap-4 items-center">
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
            <div class="flex gap-4 items-center">
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
                <label class="label">
                    <input
                        type="text"
                        class="input input-bordered w-2/3"
                        placeholder=""
                        on:keydown={addTag}
                    />
                </label>
            </div>
            <span />
            <div class="flex gap-4">
                {#each tags as tag}
                    <span class="badge badge-accent">
                        {tag}
                        <a href={"#"} on:click={removeTag(tag)} tabindex="-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="inline-block w-4 h-4 stroke-current"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                /></svg
                            >
                        </a>
                    </span>
                {/each}
            </div>
        </div>
        <ModalFooter>
            {#if id}
                <button
                    type="button"
                    on:click={remove}
                    class="btn btn-outline"
                    tabindex="-1"
                >
                    Delete
                </button>
            {/if}
            <span class="flex-grow" />
            <button type="button" on:click={submit} class="btn">
                {#if id}Update{:else}Add{/if}
            </button>
            <button type="button" on:click={cancel} class="btn btn-outline">
                Cancel
            </button>
        </ModalFooter>
    </form>
</div>
