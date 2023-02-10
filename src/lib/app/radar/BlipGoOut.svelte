<script lang="ts">
    import type { Item } from '../../model'

    export let item: Item
</script>

{#if item.quarter === 1}
    <div
        class="bg-slate-900 -mr-7 w-7 h-7 rounded-full rounded-tr-none flex justify-center items-center z-[1]"
    ></div>
{:else if item.quarter === 2}
    <div
        class="bg-slate-800 -mr-7 w-7 h-7 rounded-full rounded-tl-none flex justify-center items-center z-[1]"
    ></div>
{:else if item.quarter === 3}
    <div
        class="bg-slate-800 -mr-7 w-7 h-7 rounded-full rounded-bl-none flex justify-center items-center z-[1]"
    ></div>
{:else}
    <div
        class="bg-slate-800 -mr-7 w-7 h-7 rounded-full rounded-br-none flex justify-center items-center z-[1]"
    ></div>
{/if}
