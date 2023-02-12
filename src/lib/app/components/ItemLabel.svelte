<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import type { Item, TagColors } from '../../model'
    import { useDblClick } from '../../utils'
    import TagBadge from './TagBadge.svelte'

    const dispatch = createEventDispatcher()
    const [singleClick, dblClick] = useDblClick()

    export let item: Item
    export let duplicate: boolean = false
    export let selected: boolean = false
    export let colorMap: TagColors = {}

    function select() {
        return singleClick(() => {
            dispatch('select')
        })
    }

    function edit() {
        return dblClick(() => {
            dispatch('edit')
        })
    }
</script>

<div style="text-decoration: {selected ? 'underline' : 'none'}">
    <a on:click={select} on:dblclick={edit} href={'#'} tabIndex="-1">
        {item.index}&nbsp;-&nbsp;{item.name}
        {#if duplicate}
            <span class="badge-warning badge badge-xs" />
        {/if}
        <span class="inline-flex items-baseline gap-1">
            {#each item.tags as tag}
                <TagBadge {tag} {colorMap} />
            {/each}
        </span>
    </a>
</div>
