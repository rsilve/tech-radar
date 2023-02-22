<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import type { Item } from '../../../model'
    import { useDblClick } from '../../../utils'
    import { hasTagsOrDuplicate } from '../../../stores'

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
    class="flex h-7 w-7 content-around items-center overflow-hidden rounded-full border border-slate-900/30 pl-1 pr-1 text-slate-100 hover:overflow-visible "
    class:bg-slate-500={!hasTagsOrDuplicate(item)}
    class:bg-transparent={hasTagsOrDuplicate(item)}
>
    <a
        href={'#'}
        tabindex="-1"
        on:dblclick={edit(item)}
        on:click={select(item)}
        class="whitespace-nowrap"
        style="text-shadow: 1px 1px 1px rgba(0,0,0,.7)">{item.name}</a
    >
</div>
