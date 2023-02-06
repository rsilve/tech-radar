<script>
    import Download from "./Download.svelte";
    import Upload from "./Upload.svelte";
    import MenuIcon from "../components/icons/MenuIcon.svelte";

</script>

<div class="relative">
    <label for="top-left-menu" class="btn btn-outline text-2xl">
        <MenuIcon alt="Application menu"/>
    </label>
    <input type="checkbox" id="top-left-menu" class="menu-toggle hidden"/>
    <label for="top-left-menu" class="modal-menu-background"></label>
    <ul class="modal-menu menu bg-base-100 w-56 p-2 rounded border absolute top-full ">
        <li>
            <Download/>
        </li>
        <li>
            <Upload/>
        </li>
    </ul>

</div>
