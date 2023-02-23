<script lang="ts">
    import type { Item } from '../../../model'
    import BlipGoIn from './BlipGoIn.svelte'
    import BlipGoOut from './BlipGoOut.svelte'

    export let item: Item
</script>

{#if item.direction && item.direction > 0}
    <BlipGoIn quarter={item.quarter} />
{:else if item.direction && item.direction < 0}
    <BlipGoOut quarter={item.quarter} />
{/if}
