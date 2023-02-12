<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    import Target from './Target.svelte'
    export let Hst: Hst
</script>

<Hst.Story>
    <div style="background: white; padding: 1em; height: 50%">
        <div
            style="position: relative; aspect-ratio: 1; border: 1px dotted #ccc; "
        >
            <Target />
        </div>
    </div>
</Hst.Story>
