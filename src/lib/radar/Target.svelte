<script lang="ts">
    import {adoptionLevels} from "../constants";
    import Categories from "./Categories.svelte";

    function coordTop(radius: number) {
        return 100 / 2 + Math.cos(Math.PI / 6) * 100 * radius / 10
    }

    function coordLeft(radius: number) {
        return 100 / 2 + Math.sin(Math.PI / 6) * 100 * radius / 10
    }
</script>

<Categories />

<div class="absolute border  border-solid border-slate-400 bg-slate-200 top-1/2 left-1/2 w-1/2 h-1/2 rounded-br-full">
</div>
<div class="absolute border  border-solid border-slate-400 bg-slate-200 top-1/2 left-0 w-1/2 h-1/2 rounded-bl-full">
</div>
<div class="absolute border  border-solid border-slate-400 bg-slate-200 top-0 left-0 w-1/2 h-1/2 rounded-tl-full">
</div>
<div class="absolute border  border-solid border-slate-400 bg-slate-200 top-0 left-1/2 w-1/2 h-1/2 rounded-tr-full">
</div>

<div class="absolute border  border-solid border-slate-500 bg-slate-300 top-1/2 left-1/2 w-[40%] h-[40%] rounded-br-full">
</div>
<div class="absolute border  border-solid border-slate-500 bg-slate-300 top-1/2 left-[10%] w-[40%] h-[40%] rounded-bl-full">
</div>
<div class="absolute border  border-solid border-slate-500 bg-slate-300 top-[10%] left-[10%] w-[40%] h-[40%] rounded-tl-full">
</div>
<div class="absolute border  border-solid border-slate-500 bg-slate-300 top-[10%] left-1/2 w-[40%] h-[40%] rounded-tr-full">
</div>

<div class="absolute border  border-solid border-slate-600 bg-slate-400 top-1/2 left-1/2 w-[30%] h-[30%] rounded-br-full">
</div>
<div class="absolute border  border-solid border-slate-600 bg-slate-400 top-1/2 left-[20%] w-[30%] h-[30%] rounded-bl-full">
</div>
<div class="absolute border  border-solid border-slate-600 bg-slate-400 top-[20%] left-[20%] w-[30%] h-[30%] rounded-tl-full">
</div>
<div class="absolute border  border-solid border-slate-600 bg-slate-400 top-[20%] left-1/2 w-[30%] h-[30%] rounded-tr-full">
</div>

<div class="absolute border  border-solid border-slate-700 bg-slate-500 top-1/2 left-1/2 w-[20%] h-[20%] rounded-br-full">
</div>
<div class="absolute border  border-solid border-slate-700 bg-slate-500 top-1/2 left-[30%] w-[20%] h-[20%] rounded-bl-full">
</div>
<div class="absolute border  border-solid border-slate-700 bg-slate-500 top-[30%] left-[30%] w-[20%] h-[20%] rounded-tl-full">
</div>
<div class="absolute border  border-solid border-slate-700 bg-slate-500 top-[30%] left-1/2 w-[20%] h-[20%] rounded-tr-full">
</div>

<div class="absolute -translate-y-6 -translate-x-6 -rotate-[30deg] uppercase text-xs opacity-50"
     style="top: {coordTop(2)}%; left: {coordLeft(2)}%; text-shadow: 0 0 20px white;">
    {adoptionLevels["1"]}
</div>
<div class="absolute -translate-y-6 -translate-x-6 -rotate-[30deg] uppercase text-xs opacity-50"
     style="top: {coordTop(3)}%; left: {coordLeft(3)}%; text-shadow: 0 0 20px white;">
    {adoptionLevels["2"]}
</div>
<div class="absolute -translate-y-6 -translate-x-6 -rotate-[30deg] uppercase text-xs opacity-50"
     style="top: {coordTop(4)}%; left: {coordLeft(4)}%; text-shadow: 0 0 20px white;">
    {adoptionLevels["3"]}
</div>
<div class="absolute -translate-y-6 -translate-x-6 -rotate-[30deg] uppercase text-xs opacity-50"
     style="top: {coordTop(5)}%; left: {coordLeft(5)}%; text-shadow: 0 0 20px white;">
    {adoptionLevels["4"]}
</div>
