<script lang="ts">
    import type {Item} from "../model";
    import {duplicate, edited, selected} from "../stores";
    import {toArc} from "../utils/polarCoordinate.js";
    import {navigate} from "svelte-navigator";
    import BlipDirection from "./BlipDirection.svelte";
    import {useDblClick} from "../utils/singleAndDblClick";

    export let item: Item
    const [singleClick, dblClick] = useDblClick()
    let dup = $duplicate[item?.name.toUpperCase()] || 0
    let radius = 50
    let isSelected = false
    selected.subscribe(value => {
        isSelected = item.index === (value?.index || -1)
    })

    function select(item: Item) {
        return () => singleClick(() => {
            $selected = item
            $edited = undefined
        })
    }

    function edit(item: Item) {
        return () => dblClick(() => {
            $selected = item
            $edited = item
            navigate(`/edit/${item.index}`)
        })
    }

</script>

{#if isSelected}
    <div class="absolute border-2 border-slate-900 -mt-5 -ml-5 w-10 h-10 rounded-full flex justify-center items-center"
         style="top:{radius + toArc(item, radius/5).x}%; left:{radius + toArc(item, radius/5).y}%;"
         title="{item.name}"></div>
{/if}
<BlipDirection item={item} radius={radius}/>

<div class="absolute bg-slate-800 text-slate-300 border border-slate-900 -mt-3.5 -ml-3.5 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer drop-shadow-lg tooltip tooltip-bottom"
     style="top:{radius + toArc(item, radius/5).x}%; left:{radius + toArc(item, radius/5).y}%;"
     data-tip="{item.name}">
    <a href={'#'} tabindex="-1"
          on:dblclick={edit(item)}
          on:click={select(item)}>{item.index}</a>
    </div>
{#if dup > 1}
    <div class="absolute bg-warning/80 border border-warning -mt-3.5 ml-2 w-3 h-3 rounded-full"
         style="top:{radius + toArc(item, radius/5).x}%; left:{radius + toArc(item, radius/5).y}%;">
    </div>
{/if}
