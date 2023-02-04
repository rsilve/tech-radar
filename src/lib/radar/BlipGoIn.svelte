<script lang="ts">
    import type {Item} from "../type";
    import {toArc} from "../utils/polarCoordinate.js";

    export let item: Item
    export let radius = 0


</script>

{#if item.quarter === 1}
    <div class="absolute bg-slate-800 border-2 border-slate-900 -mt-3.5 -ml-3.5 w-7 h-7 rounded-full rounded-bl-none flex justify-center items-center"
         style="top:{radius + toArc(item, radius/5).x}%; left:{radius + toArc(item, radius/5).y}%;"
         title="{item.name}"></div>
{:else if item.quarter === 2}
    <div class="absolute bg-slate-800 border-2 border-slate-900 -mt-3.5 -ml-3.5 w-7 h-7 rounded-full rounded-br-none flex justify-center items-center"
         style="top:{radius + toArc(item, radius/5).x}%; left:{radius + toArc(item, radius/5).y}%;"
         title="{item.name}"></div>
{:else if item.quarter === 3}
    <div class="absolute bg-slate-800 border-2 border-slate-900 -mt-3.5 -ml-3.5 w-7 h-7 rounded-full rounded-tr-none flex justify-center items-center"
         style="top:{radius + toArc(item, radius/5).x}%; left:{radius + toArc(item, radius/5).y}%;"
         title="{item.name}"></div>
{:else}
    <div class="absolute bg-slate-800 border-2 border-slate-900 -mt-3.5 -ml-3.5 w-7 h-7 rounded-full rounded-tl-none flex justify-center items-center"
         style="top:{radius + toArc(item, radius/5).x}%; left:{radius + toArc(item, radius/5).y}%;"
         title="{item.name}"></div>
{/if}

