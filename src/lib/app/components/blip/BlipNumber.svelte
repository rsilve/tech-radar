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
    class="tooltip tooltip-bottom flex h-7 w-7 content-around items-center overflow-hidden rounded-full border border-slate-900/30 pl-1 pr-1 text-slate-100 hover:justify-center hover:overflow-visible hover:pl-0"
    class:bg-slate-500={item.tags.length <= 0}
    class:bg-transparent={item.tags.length > 0}
    data-tip={item.name}
>
    <a
        href={'#'}
        tabindex="-1"
        on:dblclick={edit(item)}
        on:click={select(item)}
        class="whitespace-nowrap"
        style="text-shadow: 0 0 6px rgba(0,0,0,.5)">{item.name}</a
    >
</div>
