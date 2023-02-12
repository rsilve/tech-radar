<script lang="ts">
    import type { Item } from '../../model'
    import { colorMap, duplicate, edited, selected } from '../../stores'
    import { navigate } from 'svelte-navigator'
    import BlipDirection from '../components/blip/BlipDirection.svelte'
    import BlipStack from '../components/blip/BlipStack.svelte'
    import BlipNumber from '../components/blip/BlipNumber.svelte'
    import BlipDuplicate from '../components/blip/BlipDuplicate.svelte'
    import BlipTag from '../components/blip/BlipTag.svelte'

    export let item: Item

    let dup = $duplicate[item?.name.toUpperCase()] || 0
    let radius = 50
    let isSelected = false

    selected.subscribe((value) => {
        isSelected = item.index === (value?.index || -1)
    })

    function select(item: Item) {
        return () => {
            $selected = $selected ? undefined : item
            $edited = undefined
        }
    }

    function edit(item: Item) {
        return () => {
            $selected = item
            $edited = item
            navigate(`/edit/${item.index}`)
        }
    }
</script>

<BlipStack {radius} {item}>
    {#if dup > 1}
        <BlipDuplicate />
    {/if}
    {#each item.tags as tag}
        <BlipTag color={$colorMap[tag] || '#cccc'} />
    {/each}
    <BlipDirection {item} />
    <BlipNumber
        {item}
        selected={isSelected}
        on:select={select(item)}
        on:edit={edit(item)}
    />
</BlipStack>
