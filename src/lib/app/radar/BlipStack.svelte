<script lang="ts">
    import type { Item } from '../../model'
    import { toArc } from '../../utils'

    export let radius: number
    export let item: Item
    export let translateX: string = '0'
</script>

<div
    class="absolute -mt-3.5 -ml-3.5 flex items-center justify-center"
    style="top:{radius + toArc(item, radius / 5).x}%; left:{radius +
        toArc(item, radius / 5).y}%; transform: translateX({translateX});"
    data-tip="{item.name}"
>
    <slot />
</div>
