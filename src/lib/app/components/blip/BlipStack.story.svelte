<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    import Target from './Target.svelte'
    import BlipStack from './BlipStack.svelte'
    import BlipNumber from './BlipNumber.svelte'
    import type { Item } from '../../../model'

    export let Hst: Hst

    let radius = 50

    const item: Item = {
        name: 'name',
        level: 1,
        quarter: 1,
        index: 1,
        x: 0.5,
        y: 0.5,
        tags: ['dev', 'test'],
    }
</script>

<Hst.Story>
    <div style="background: white; padding: 1em; height: 50%">
        <div
            style="position: relative; aspect-ratio: 1; border: 1px dotted #ccc; "
        >
            <Target />
            <BlipStack {radius} {item}>
                <BlipNumber {item} />
            </BlipStack>
            <BlipStack {radius} item={{ ...item, level: 2 }}>
                <BlipNumber {item} />
            </BlipStack>
            <BlipStack {radius} item={{ ...item, level: 3 }}>
                <BlipNumber {item} />
            </BlipStack>
            <BlipStack {radius} item={{ ...item, level: 4 }}>
                <BlipNumber {item} />
            </BlipStack>

            <BlipStack {radius} item={{ ...item, quarter: 2 }}>
                <BlipNumber {item} />
            </BlipStack>
            <BlipStack {radius} item={{ ...item, quarter: 2, level: 2 }}>
                <BlipNumber {item} />
            </BlipStack>
            <BlipStack {radius} item={{ ...item, quarter: 2, level: 3 }}>
                <BlipNumber {item} />
            </BlipStack>
            <BlipStack {radius} item={{ ...item, quarter: 2, level: 4 }}>
                <BlipNumber {item} />
            </BlipStack>

            <BlipStack {radius} item={{ ...item, quarter: 3 }}>
                <BlipNumber {item} />
            </BlipStack>
            <BlipStack {radius} item={{ ...item, quarter: 3, level: 2 }}>
                <BlipNumber {item} />
            </BlipStack>
            <BlipStack {radius} item={{ ...item, quarter: 3, level: 3 }}>
                <BlipNumber {item} />
            </BlipStack>
            <BlipStack {radius} item={{ ...item, quarter: 3, level: 4 }}>
                <BlipNumber {item} />
            </BlipStack>

            <BlipStack {radius} item={{ ...item, quarter: 4 }}>
                <BlipNumber {item} />
            </BlipStack>
            <BlipStack {radius} item={{ ...item, quarter: 4, level: 2 }}>
                <BlipNumber {item} />
            </BlipStack>
            <BlipStack {radius} item={{ ...item, quarter: 4, level: 3 }}>
                <BlipNumber {item} />
            </BlipStack>
            <BlipStack {radius} item={{ ...item, quarter: 4, level: 4 }}>
                <BlipNumber {item} />
            </BlipStack>
        </div>
    </div>
</Hst.Story>
