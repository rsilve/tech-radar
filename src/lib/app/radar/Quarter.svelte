<script>
    import ItemsList from "./ItemsList.svelte";
    export let quarter = 0;
</script>

<div class="text-xs ml-2 pb-2 h-full max-h-full flex" style="grid-area: quarter-{quarter}">
    <ItemsList quarter={quarter}></ItemsList>
</div>
