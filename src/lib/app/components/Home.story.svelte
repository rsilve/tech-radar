<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    import Home from './Home.svelte'
    export let Hst: Hst
</script>

<Hst.Story>
    <Home id="menu" />
    menu open : <input type="checkbox" id="menu" />
</Hst.Story>
