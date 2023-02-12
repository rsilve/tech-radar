<script lang="ts">
    import type { Hst as HstType } from '@histoire/plugin-svelte'
    import TagsInput from './TagsInput.svelte'
    import { logEvent } from 'histoire/client'
    import { TAG_COLORS, type TagColors } from '../../model'

    export let Hst: HstType

    let tags: string[] = ['DEV']

    let existingTags: string[] = ['DEV', 'PROD', 'TEST']

    let colorMap: TagColors = {
        DEV: TAG_COLORS[0],
        PROD: TAG_COLORS[1],
        TEST: TAG_COLORS[2],
    }
    function onChange(event: CustomEvent) {
        logEvent('change', event)
    }
</script>

<Hst.Story title="Tag Input">
    <TagsInput {tags} {existingTags} {colorMap} on:change={onChange} />
</Hst.Story>
