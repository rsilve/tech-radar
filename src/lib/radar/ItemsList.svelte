<script lang="ts">
    import {items} from '../stores';
    import type {Orientation} from "../type";
    import ItemElement from "./ItemElement.svelte";

    export let quarter: number;
    export let orientation: Orientation = "left"

</script>

<ul class="items-list columns-2">

    {#each $items.filter(value => value.quarter === quarter && value.level === 1) as item, index}
        {#if index === 0}
            <li class="title">Adopt</li>
        {/if}
        <ItemElement item={item} orientation={orientation}/>
    {/each}

    {#each $items.filter(value => value.quarter === quarter && value.level === 2) as item, index}
        {#if index === 0}
            <li class="title">Trial</li>
        {/if}
        <ItemElement item={item} orientation={orientation}/>
    {/each}

    {#each $items.filter(value => value.quarter === quarter && value.level === 3) as item, index}
        {#if index === 0}
            <li class="title">Assess</li>
        {/if}
        <ItemElement item={item} orientation={orientation}/>
    {/each}

    {#each $items.filter(value => value.quarter === quarter && value.level === 4) as item, index}
        {#if index === 0}
            <li class="title">Hold</li>
        {/if}
        <ItemElement item={item} orientation={orientation}/>
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
