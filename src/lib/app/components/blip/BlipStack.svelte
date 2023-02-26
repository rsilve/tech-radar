<script lang="ts">
    import type { Item } from '../../../model'
    import { toArc } from '../../../utils'

    export let radius: number
    export let item: Item
    export let selected = false
</script>

<div
    class="absolute -translate-x-1/2 -translate-y-1/2 transition hover:z-50"
    class:scale-[1.2]={selected}
    class:brightness-125={selected}
    style="top:{radius + toArc(item, radius / 5).x}%; left:{radius +
        toArc(item, radius / 5).y}%;"
    data-tip={item.name}
>
    <div class="relative flex items-center -space-x-[1.5rem]">
        <slot />
    </div>
</div>
