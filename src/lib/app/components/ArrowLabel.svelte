<script lang="ts">
    let forLabel: string = '__no_id'
    export { forLabel as for }

    let up = false
</script>

<label for={forLabel} class="cursor-pointer gap-2" on:click={() => (up = !up)}>
    <slot />
    <input type="checkbox" class="hidden" bind:checked={up} tabindex="-1" />
    <span>
        <i class="arrow" />
    </span>
</label>

<style>
    .arrow {
        border: solid black;
        border-width: 0 0.2rem 0.2rem 0;
        display: inline-block;
        padding: 0.2rem;
        margin: 0.2rem;
        grid-column: 1;
        grid-row: 1;
        transform: rotate(45deg);
    }

    input[type='checkbox']:checked ~ span > .arrow {
        transform: rotate(-135deg) translateX(-0.4rem);
    }
</style>
