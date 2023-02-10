<script lang="ts">
    import type { Item } from '../../model'
    import { duplicate, edited, selected } from '../../stores'
    import { useDblClick } from '../../utils'
    import { navigate } from 'svelte-navigator'

    export let item: Item

    const [singleClick, dblClick] = useDblClick()

    let dup = $duplicate[item?.name.toUpperCase()] || 0

    function select() {
        return singleClick(() => {
            $selected = item
            $edited = undefined
        })
    }

    function edit() {
        return dblClick(() => {
            $selected = item
            $edited = item
            navigate(`/edit/${item.index}`)
        })
    }
</script>

<li
    class="m-0 whitespace-nowrap rounded-sm p-0 pr-1 pl-1 hover:bg-accent-focus/50"
    style="text-decoration: {item.index === ($selected?.index || -1)
        ? 'underline'
        : 'none'}"
>
    <a on:click="{select}" on:dblclick="{edit}" href="{'#'}" tabIndex="-1">
        {item.index}&nbsp;-&nbsp;{item.name}
        {#if dup > 1}
            <span class="badge badge-warning badge-xs"></span>
        {/if}
        <span class="inline-flex items-baseline gap-1">
            {#each item.tags as tag}<span class="badge badge-accent badge-xs"
                    >{tag}</span
                >{/each}
        </span>
    </a>
</li>
