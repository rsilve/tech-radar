<script lang="ts">
    import type { Item } from "../../model";
    import { duplicate, edited, selected } from "../../stores";
    import { toArc } from "../../utils";
    import { navigate } from "svelte-navigator";
    import BlipDirection from "./BlipDirection.svelte";
    import { useDblClick } from "../../utils";
    import BlipStack from "./BlipStack.svelte";

    export let item: Item;
    const [singleClick, dblClick] = useDblClick();
    let dup = $duplicate[item?.name.toUpperCase()] || 0;
    let radius = 50;
    let isSelected = false;

    selected.subscribe((value) => {
        isSelected = item.index === (value?.index || -1);
    });

    function select(item: Item) {
        return () =>
            singleClick(() => {
                $selected = item;
                $edited = undefined;
            });
    }

    function edit(item: Item) {
        return () =>
            dblClick(() => {
                $selected = item;
                $edited = item;
                navigate(`/edit/${item.index}`);
            });
    }
</script>

<BlipStack {radius} {item}>
    {#if dup > 1}
        <div
            class="w-7 h-7 -mr-[1.9rem] bg-warning border border-warning rounded-full"
        />
    {/if}
    {#each item.tags as _}
        <div
            class="w-7 h-7 -mr-[1.9rem] bg-slate-500 border border-slate-700 rounded-full"
        />
    {/each}

    {#if isSelected}
        <div
            class="border-2 border-slate-900 w-9 h-9 -mr-8 rounded-full flex justify-center items-center"
        />
    {/if}
    <BlipDirection {item} />
    <div
        class="w-7 h-7 bg-slate-800 text-slate-300 border border-slate-900 rounded-full tooltip tooltip-bottom z-[2]"
    >
        <a
            href={"#"}
            tabindex="-1"
            on:dblclick={edit(item)}
            on:click={select(item)}>{item.index}</a
        >
    </div>
</BlipStack>
