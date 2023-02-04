<script lang="ts">

    import type {Item, Orientation} from "../type";
    import {selected} from '../stores';

    export let item: Item
    export let onSelect: (item: Item) => (() => void)

    export let orientation: Orientation
</script>
<li class="hover:bg-accent-focus/50 pr-1 pl-1 rounded-sm m-0 p-0 whitespace-nowrap flex gap-2"
    style="text-decoration: {item.index === ($selected?.index || -1) ? 'underline' : 'none'}">
    <a on:click={onSelect(item)} class="cursor-pointer flex-grow " href={'#'} tabIndex="-1">
        {#if orientation === "right"}{item.name}&nbsp;-&nbsp;{item.index}
        {:else}{item.index}&nbsp;-&nbsp;{item.name}
        {/if}
    </a>
</li>