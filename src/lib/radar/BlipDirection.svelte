<script lang="ts">
    import type {Item} from "../model";
    import BlipGoIn from "./BlipGoIn.svelte";
    import BlipGoOut from "./BlipGoOut.svelte";

    export let item: Item
    export let radius = 0
</script>

{#if item.direction && item.direction > 0}
    <BlipGoIn item={item} radius={radius}/>
{:else if item.direction && item.direction < 0}
    <BlipGoOut item={item} radius={radius}/>
{/if}
