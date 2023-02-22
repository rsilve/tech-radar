<script lang="ts">
    import type { Item } from '../../../model'
    import { toArc } from '../../../utils'
    import { selected } from '../../../stores'

    export let radius: number
    export let item: Item
    let isSelected = false
    $: isSelected = $selected?.index === item.index
</script>

<div
    class="absolute -translate-x-1/2 -translate-y-1/2 transition hover:z-50"
    class:scale-[1.2]={isSelected}
    class:brightness-125={isSelected}
    style="top:{radius + toArc(item, radius / 5).x}%; left:{radius +
        toArc(item, radius / 5).y}%;"
    data-tip={item.name}
>
    <div class="relative flex items-center -space-x-[1.5rem]">
        <slot />
    </div>
</div>
