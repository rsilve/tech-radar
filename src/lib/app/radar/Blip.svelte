<script lang="ts">
    import type { Item } from '../../model'
    import { colorMap, hasDuplicate, selected } from '../../stores'
    import { navigate } from 'svelte-navigator'
    import BlipDirection from '../components/blip/BlipDirection.svelte'
    import BlipStack from '../components/blip/BlipStack.svelte'
    import BlipNumber from '../components/blip/BlipNumber.svelte'
    import BlipDuplicate from '../components/blip/BlipDuplicate.svelte'
    import BlipTag from '../components/blip/BlipTag.svelte'

    export let item: Item

    let dup = hasDuplicate(item)
    let radius = 50

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

<BlipStack {radius} {item}>
    {#if dup}
        <BlipDuplicate />
    {/if}
    {#each item.tags.reverse() as tag}
        <BlipTag color={$colorMap[tag] || '#cccc'} />
    {/each}
    <BlipDirection {item} />
    <BlipNumber {item} on:select={select(item)} on:edit={edit(item)} />
</BlipStack>
