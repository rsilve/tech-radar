<script>
    import Download from './Download.svelte'
    import Upload from './Upload.svelte'
    import MenuIcon from '../components/icons/MenuIcon.svelte'

    let labelElement

    function close() {
        labelElement?.click()
    }
</script>

<div class="relative">
    <label
        bind:this="{labelElement}"
        for="top-left-menu"
        class="btn-outline btn text-2xl"
    >
        <MenuIcon alt="Application menu" />
    </label>
    <input type="checkbox" id="top-left-menu" class="menu-toggle hidden" />
    <label for="top-left-menu" class="modal-menu-background"></label>
    <ul
        class="modal-menu menu absolute top-full w-56 rounded border bg-base-100 p-2 "
    >
        <li>
            <Download onComplete="{close}" />
        </li>
        <li>
            <Upload onComplete="{close}" />
        </li>
    </ul>
</div>
