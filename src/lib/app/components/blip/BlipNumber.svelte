<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import type { Item } from '../../../model'
    import { useDblClick } from '../../../utils'

    const dispatch = createEventDispatcher()
    const [singleClick, dblClick] = useDblClick()

    export let item: Item

    function select(item: Item) {
        return () =>
            singleClick(() => {
                dispatch('select', { value: item })
            })
    }

    function edit(item: Item) {
        return () =>
            dblClick(() => {
                dispatch('edit', { value: item })
            })
    }
</script>

<div
    class="tooltip tooltip-bottom z-[2] h-7 w-7 rounded-full border border-slate-900 bg-slate-800 text-slate-300"
>
    <a href={'#'} tabindex="-1" on:dblclick={edit(item)} on:click={select(item)}
        >{item.index}</a
    >
</div>
