<script>
    import Download from "./Download.svelte";
    import Upload from "./Upload.svelte";
    import MenuIcon from "../components/icons/MenuIcon.svelte";

    let isOpen = false
    function toggleOpen() {
        isOpen = !isOpen
    }

</script>

<div class="relative">
    <button class="btn btn-outline text-2xl" on:click={toggleOpen} tabIndex="-1">
        <MenuIcon alt="Application menu"/>
    </button>
    {#if isOpen}
        <ul class="menu bg-base-100 w-56 p-2 rounded border absolute top-full ">
            <li><Download/></li>
            <li><Upload/></li>
        </ul>
    {/if}
</div>
