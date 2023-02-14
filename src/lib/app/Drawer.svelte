<script lang="ts">
    import Download from './components/Download.svelte'
    import Upload from './components/Upload.svelte'
    import Home from './components/Home.svelte'
    import { archive, items } from '../stores'
    export let id: string = 'app-drawer'

    let closeElement: HTMLInputElement

    function close() {
        closeElement?.click()
    }
</script>

<div class="drawer">
    <input
        {id}
        bind:this={closeElement}
        type="checkbox"
        class="drawer-toggle"
    />
    <div class="drawer-content">
        <!-- Page content here -->
        <slot />
    </div>
    <div class="drawer-side">
        <label for={id} class="drawer-overlay" />
        <ul class="menu w-96 bg-base-100 text-base-content">
            <li><Home {id} /></li>
            <li><Download archive={$archive} onComplete={close} /></li>
            <li>
                <Upload onLoad={(list) => items.set(list)} onComplete={close} />
            </li>
        </ul>
    </div>
</div>
