<script lang="ts">
    import type { Item } from '../../../model'
    import { toArc } from '../../../utils'

    export let radius: number
    export let item: Item
</script>

<div
    class="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
    style="top:{radius + toArc(item, radius / 5).x}%; left:{radius +
        toArc(item, radius / 5).y}%;"
    data-tip={item.name}
>
    <slot />
</div>
