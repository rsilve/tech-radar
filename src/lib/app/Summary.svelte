<script lang="ts">
    import { adoptionLevels } from "../model";
    import { items } from "../stores";
</script>

<div class="text-center">
    {$items.length} blips &mdash;
    {$items.filter((item) => item.level === 1).length}
    {adoptionLevels[1]} &mdash;
    {$items.filter((item) => item.level === 2).length}
    {adoptionLevels[2]} &mdash;
    {$items.filter((item) => item.level === 3).length}
    {adoptionLevels[3]} &mdash;
    {$items.filter((item) => item.level === 4).length}
    {adoptionLevels[4]}
</div>
