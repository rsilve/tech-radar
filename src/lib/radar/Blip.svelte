<script lang="ts">
    import type {Item} from "../type";
    import {edited, selected} from "../stores";
    import {toArc} from "../utils/polarCoordinate.js";
    import {navigate} from "svelte-navigator";

    export let item: Item
    let isSingleClick = true

    let radius = 50
    let isSelected = false
    selected.subscribe(value => {
        isSelected = item.index === (value?.index || -1)
    })

    function select(item) {
        return () => {
            isSingleClick = true
            setTimeout(() => {
                if (isSingleClick) {
                    $selected = item
                    $edited = undefined
                }
            }, 200)
        }
    }

    function edit(item) {
        return () => {
            isSingleClick = false
            $selected = item
            $edited = item
            navigate(`/edit/${item.index}`)
        }
    }

</script>

{#if isSelected}
    <div class="absolute border-2 border-slate-900 -mt-5 -ml-5 w-10 h-10 rounded-full flex justify-center items-center"
         style="top:{radius + toArc(item, radius/5).x}%; left:{radius + toArc(item, radius/5).y}%;"
         title="{item.name}"></div>
{/if}
<div class="absolute bg-slate-800 text-slate-300 border border-slate-900 -mt-3.5 -ml-3.5 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer tooltip tooltip-bottom"
     style="top:{radius + toArc(item, radius/5).x}%; left:{radius + toArc(item, radius/5).y}%;"
     data-tip="{item.name}">
    <span class="cursor-pointer"
          on:dblclick={edit(item)}
          on:click={select(item)}>{item.index}</span></div>

