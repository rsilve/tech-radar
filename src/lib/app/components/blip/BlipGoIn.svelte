<script lang="ts">
    import type { Item } from '../../../model'

    export let item: Item
</script>

{#if item.quarter === 1}
    <div
        class=" z-[1]  -mr-7 flex h-7 w-7 items-center justify-center rounded-full rounded-bl-none bg-slate-800"
    ></div>
{:else if item.quarter === 2}
    <div
        class=" z-[1]  -mr-7 flex h-7 w-7 items-center justify-center rounded-full rounded-br-none bg-slate-800"
    ></div>
{:else if item.quarter === 3}
    <div
        class=" z-[1]  -mr-7 flex h-7 w-7 items-center justify-center rounded-full rounded-tr-none bg-slate-800"
    ></div>
{:else}
    <div
        class=" z-[1]  -mr-7 flex h-7 w-7 items-center justify-center rounded-full rounded-tl-none bg-slate-800"
    ></div>
{/if}
