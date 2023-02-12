<script lang="ts">
    import type { Item } from '../../model'
    import { colorMap, duplicate, edited, selected } from '../../stores'
    import { navigate } from 'svelte-navigator'
    import BlipDirection from '../components/blip/BlipDirection.svelte'
    import { useDblClick } from '../../utils'
    import BlipStack from '../components/blip/BlipStack.svelte'
    import BlipNumber from '../components/blip/BlipNumber.svelte'
    import BlipDuplicate from '../components/blip/BlipDuplicate.svelte'
    import BlipTag from '../components/blip/BlipTag.svelte'

    export let item: Item
    const [singleClick, dblClick] = useDblClick()
    let dup = $duplicate[item?.name.toUpperCase()] || 0
    let radius = 50
    let isSelected = false

    selected.subscribe((value) => {
        isSelected = item.index === (value?.index || -1)
    })

    function select(item: Item) {
        return () => {
            $selected = item
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
    {#if isSelected}
        <div
            class="-mr-8 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-900"
        />
    {/if}
    <BlipDirection {item} />
    <BlipNumber {item} on:select={select(item)} on:edit={edit(item)} />
</BlipStack>
