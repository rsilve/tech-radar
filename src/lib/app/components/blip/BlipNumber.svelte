<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import type { Item } from '../../../model'
    import { useDblClick } from '../../../utils'

    const dispatch = createEventDispatcher()
    const [singleClick, dblClick] = useDblClick()

    export let item: Item
    export let selected: boolean = false

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
    class="-ml-[0.15rem] flex h-9 w-9 items-center justify-center rounded-full border border-slate-900"
    style:border-width={selected ? '2px' : '0'}
>
    <div
        class="tooltip tooltip-bottom flex h-7 w-7 items-center justify-center rounded-full border border-slate-900 bg-slate-800 text-slate-300"
        data-tip={item.name}
    >
        <a
            href={'#'}
            tabindex="-1"
            on:dblclick={edit(item)}
            on:click={select(item)}>{item.index}</a
        >
    </div>
</div>
