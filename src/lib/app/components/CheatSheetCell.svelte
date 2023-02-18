<script lang="ts">
    import type { Writable } from 'svelte/store'
    import { writable } from 'svelte/store'

    export let stage: number = -1
    export let maturity: number = 0
    export let state: Writable<number[]> = writable([])

    let isSelected = false
    state.subscribe((value) => {
        isSelected = maturity === value[stage]
    })

    function setState() {
        state.update((s) => {
            const res = [...s]
            res[stage] = (res[stage] || -1) === maturity ? 0 : maturity
            return res
        })
    }
</script>

<td class:active={isSelected} on:click={setState}>
    <div class="content"><slot /></div>
</td>

<style>
    td {
        white-space: normal;
        cursor: pointer;
        font-size: smaller;
        line-height: 1.2em;
        vertical-align: top;
    }
    .content {
        border: 1px solid rgba(0, 0, 0, 0);
        border-radius: 0.3rem;
        width: 100%;
        height: 100%;
        padding: 0.2rem;
        box-sizing: border-box;
    }
    .active div {
        border: 1px solid rgba(0, 0, 0, 0.5);
        background-color: rgba(0, 0, 0, 0.1);
    }
</style>
