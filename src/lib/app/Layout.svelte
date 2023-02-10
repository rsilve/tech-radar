<div class="w-screen h-screen max-h-screen pb-6">
    <div
        class="grid grid-rows-[auto_min-content_1fr_min-content_min-content] h-full w-full"
    >
        <div>
            <slot name="header" />
        </div>
        <div class="divider"></div>
        <div>
            <slot name="radar" />
        </div>
        <div class="divider"></div>
        <div>
            <slot name="search" />
        </div>
    </div>
</div>
