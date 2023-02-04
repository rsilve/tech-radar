<script>
    import AbstractIcon from "./AbstractIcon.svelte";

    export let alt = ""
</script>

<AbstractIcon>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="{alt}" role="img">
        <title>{alt}</title>
        <path d="M5 7H19" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 12L19 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 17L19 17" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</AbstractIcon>

