<script lang="ts">
    import type { Hst as HstType } from '@histoire/plugin-svelte'
    import TagsInput from './TagsInput.svelte'
    import { logEvent } from 'histoire/client'

    export let Hst: HstType

    let tags: string[] = []

    let existingTags: string[] = []
    function onChange(event: CustomEvent) {
        logEvent('change', event)
    }
</script>

<Hst.Story title="Tag Input">
    <TagsInput {tags} {existingTags} on:change={onChange} />

    <svelte:fragment slot="controls">
        <Hst.CheckboxList
            bind:value={existingTags}
            title="Tags"
            options={[
                {
                    label: 'Crash Bandicoot',
                    value: 'Crash-bandicoot',
                },
                {
                    label: 'The Last of Us',
                    value: 'The-last-of-us',
                },
                {
                    label: 'Ghost of Tsushima',
                    value: 'Ghost-of-tsushima',
                },
            ]}
        />
    </svelte:fragment>
</Hst.Story>
