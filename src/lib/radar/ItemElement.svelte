<script lang="ts">

    import type {Item, Orientation} from "../model";
    import {edited, selected} from '../stores';
    import {useDblClick} from "../utils/singleAndDblClick";
    import {navigate} from "svelte-navigator";

    export let item: Item
    export let orientation: Orientation

    const [singleClick, dblClick] = useDblClick()

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
<li class="hover:bg-accent-focus/50 pr-1 pl-1 rounded-sm m-0 p-0 whitespace-nowrap"
    style="text-decoration: {item.index === ($selected?.index || -1) ? 'underline' : 'none'}">
    <a on:click={select} on:dblclick={edit} href={'#'} tabIndex="-1">
        {#if orientation === "right"}{item.name}&nbsp;-&nbsp;{item.index}
        {:else}{item.index}&nbsp;-&nbsp;{item.name}
        {/if}
    </a>
</li>