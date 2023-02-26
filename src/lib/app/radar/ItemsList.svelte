<script lang="ts">
    import { navigate } from 'svelte-navigator'
    import type { Item } from '../../model'
    import { colorMap, enhanced, selected } from '../../stores'
    import ItemLabel from '../components/ItemLabel.svelte'

    export let quarter: number

    function isSelected(item: Item, selected: Item) {
        return item.index === (selected?.index || -1)
    }

    function select(item: Item) {
        return () => {
            $selected = $selected ? undefined : item
        }
    }

    function edit(item: Item) {
        return () => {
            navigate(`/edit/${item.index}`)
        }
    }
</script>

<ul class="items-list columns-2">
    {#each $enhanced.filter((value) => value.quarter === quarter && value.level === 1) as item, index}
        {#if index === 0}
            <li class="title">Adopt</li>
        {/if}
        <li>
            <ItemLabel
                {item}
                selected={isSelected(item, $selected)}
                colorMap={$colorMap}
                on:select={select(item)}
                on:edit={edit(item)}
            />
        </li>
    {/each}

    {#each $enhanced.filter((value) => value.quarter === quarter && value.level === 2) as item, index}
        {#if index === 0}
            <li class="title">Trial</li>
        {/if}
        <li>
            <ItemLabel
                {item}
                selected={isSelected(item, $selected)}
                colorMap={$colorMap}
                on:select={select(item)}
                on:edit={edit(item)}
            />
        </li>
    {/each}

    {#each $enhanced.filter((value) => value.quarter === quarter && value.level === 3) as item, index}
        {#if index === 0}
            <li class="title">Assess</li>
        {/if}
        <li>
            <ItemLabel
                {item}
                selected={isSelected(item, $selected)}
                colorMap={$colorMap}
                on:select={select(item)}
                on:edit={edit(item)}
            />
        </li>
    {/each}

    {#each $enhanced.filter((value) => value.quarter === quarter && value.level === 4) as item, index}
        {#if index === 0}
            <li class="title">Hold</li>
        {/if}
        <li>
            <ItemLabel
                {item}
                selected={isSelected(item, $selected)}
                colorMap={$colorMap}
                on:select={select(item)}
                on:edit={edit(item)}
            />
        </li>
    {/each}
</ul>

<style>
    .items-list {
        column-fill: auto;
    }
    li.title {
        font-variant: small-caps;
        font-weight: bolder;
    }
</style>
