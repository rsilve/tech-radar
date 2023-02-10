<script lang="ts">
    import type { Item } from '../../model'
    import { duplicate, edited, selected } from '../../stores'
    import { toArc } from '../../utils'
    import { navigate } from 'svelte-navigator'
    import BlipDirection from './BlipDirection.svelte'
    import { useDblClick } from '../../utils'
    import BlipStack from './BlipStack.svelte'

    export let item: Item
    const [singleClick, dblClick] = useDblClick()
    let dup = $duplicate[item?.name.toUpperCase()] || 0
    let radius = 50
    let isSelected = false

    selected.subscribe((value) => {
        isSelected = item.index === (value?.index || -1)
    })

    function select(item: Item) {
        return () =>
            singleClick(() => {
                $selected = item
                $edited = undefined
            })
    }

    function edit(item: Item) {
        return () =>
            dblClick(() => {
                $selected = item
                $edited = item
                navigate(`/edit/${item.index}`)
            })
    }
</script>

<BlipStack radius="{radius}" item="{item}">
    {#if dup > 1}
        <div
            class="-mr-[1.9rem] h-7 w-7 rounded-full border border-warning bg-warning"
        ></div>
    {/if}
    {#each item.tags as _}
        <div
            class="-mr-[1.9rem] h-7 w-7 rounded-full border border-secondary bg-transparent"
        ></div>
    {/each}

    {#if isSelected}
        <div
            class="-mr-8 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-900"
        ></div>
    {/if}
    <BlipDirection item="{item}" />
    <div
        class="tooltip tooltip-bottom z-[2] h-7 w-7 rounded-full border border-slate-900 bg-slate-800 text-slate-300"
    >
        <a
            href="{'#'}"
            tabindex="-1"
            on:dblclick="{edit(item)}"
            on:click="{select(item)}">{item.index}</a
        >
    </div>
</BlipStack>
