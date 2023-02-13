<script>
    import Drawer from './Drawer.svelte'
</script>

<Drawer id="app-drawer">
    <div class="h-screen max-h-screen w-screen pb-6">
        <div
            class="grid h-full w-full grid-rows-[auto_1fr_min-content_min-content]"
        >
            <div>
                <slot name="header" />
            </div>
            <div>
                <slot name="radar" />
            </div>
            <div class="divider" />
            <div>
                <slot name="search" />
            </div>
        </div>
    </div>
</Drawer>
