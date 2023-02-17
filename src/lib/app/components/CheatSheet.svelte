<script lang="ts">
    import CheatSheetCell from './CheatSheetCell.svelte'
    import { writable } from 'svelte/store'
    import { adoptionLevels } from '../../model'

    export let level = 0

    const state = writable(new Array(15).fill(0))
    $: $state = new Array(15).fill(level)
    let score = 0
    state.subscribe((list) => {
        const defined = list.filter((value) => value > 0)
        if (defined.length > 0) {
            const sum = defined.reduce((previousValue, currentValue) => {
                return currentValue + previousValue
            }, 0)
            score = Math.round(sum / defined.length)
        }
        return 0
    })
</script>

<div class="overflow-x-auto">
    Use the suggestion: {#if score}
        <strong>{adoptionLevels[score] || ''}</strong>
    {:else}
        <span class="text-accent"
            >Select the items that fit with your perception</span
        >
    {/if}
    <table class="table-compact table w-full text-xs">
        <thead>
            <tr>
                <th>Stage (of adoption)</th>
                <th>Hold</th>
                <th>Assess</th>
                <th>Trial</th>
                <th>Adopt</th>
            </tr>
            <tr>
                <th colspan="5">Characteristics</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Ubiquity</th>
                <CheatSheetCell stage={0} maturity={4} {state}
                    >Rare</CheatSheetCell
                >
                <CheatSheetCell stage={0} maturity={3} {state}
                    >Slowly increasing consumption</CheatSheetCell
                >
                <CheatSheetCell stage={0} maturity={2} {state}
                    >Rapidly increasing consumption</CheatSheetCell
                >
                <CheatSheetCell stage={0} maturity={1} {state}
                    >Widespread and stabilising</CheatSheetCell
                >
            </tr>
            <tr>
                <th>Certainty</th>
                <CheatSheetCell stage={1} maturity={4} {state}
                    >Poorly understood</CheatSheetCell
                >
                <CheatSheetCell stage={1} maturity={3} {state}
                    >Rapid increases in learning</CheatSheetCell
                >
                <CheatSheetCell stage={1} maturity={2} {state}
                    >Rapid increases in use / fit for purpose</CheatSheetCell
                >
                <CheatSheetCell stage={1} maturity={1} {state}
                    >Commonly understood (in terms of use)</CheatSheetCell
                >
            </tr>
            <tr>
                <th>Publication Types</th>
                <CheatSheetCell stage={2} maturity={4} {state}
                    >Normally decribe the wonder of the thing</CheatSheetCell
                >
                <CheatSheetCell stage={2} maturity={3} {state}
                    >Build / construct / awareness and learning</CheatSheetCell
                >
                <CheatSheetCell stage={2} maturity={2} {state}
                    >Maintenance / operations / installation / feature</CheatSheetCell
                >
                <CheatSheetCell stage={2} maturity={1} {state}
                    >Focused on use</CheatSheetCell
                >
            </tr>
        </tbody>
        <thead>
            <tr>
                <th colspan="5"> General Properties</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Market</th>
                <CheatSheetCell stage={3} maturity={4} {state}
                    >Undefined market</CheatSheetCell
                >
                <CheatSheetCell stage={3} maturity={3} {state}
                    >Forming market</CheatSheetCell
                >
                <CheatSheetCell stage={3} maturity={2} {state}
                    >Growing market</CheatSheetCell
                >
                <CheatSheetCell stage={3} maturity={1} {state}
                    >Mature market</CheatSheetCell
                >
            </tr>
            <tr>
                <th>Knowledge management</th>
                <CheatSheetCell stage={4} maturity={4} {state}
                    >Uncertain</CheatSheetCell
                >
                <CheatSheetCell stage={4} maturity={3} {state}
                    >Learning on use</CheatSheetCell
                >
                <CheatSheetCell stage={4} maturity={2} {state}
                    >Learning on operation</CheatSheetCell
                >
                <CheatSheetCell stage={4} maturity={1} {state}
                    >known / accepted</CheatSheetCell
                >
            </tr>
            <tr>
                <th>Market Perception</th>
                <CheatSheetCell stage={5} maturity={4} {state}
                    >Chaotic (non linear)</CheatSheetCell
                >
                <CheatSheetCell stage={5} maturity={3} {state}
                    >Domain of experts</CheatSheetCell
                >
                <CheatSheetCell stage={5} maturity={2} {state}
                    >Increasing expectation of use</CheatSheetCell
                >
                <CheatSheetCell stage={5} maturity={1} {state}
                    >Ordered (appearance of being linear) / trivial</CheatSheetCell
                >
            </tr>
            <tr>
                <th>User perception</th>
                <CheatSheetCell stage={6} maturity={4} {state}
                    >Different / confusing / exciting / surprising</CheatSheetCell
                >
                <CheatSheetCell stage={6} maturity={3} {state}
                    >Leading edge / emerging</CheatSheetCell
                >
                <CheatSheetCell stage={6} maturity={2} {state}
                    >Common / disappointed if not used or available</CheatSheetCell
                >
                <CheatSheetCell stage={6} maturity={1} {state}
                    >Standard / expected</CheatSheetCell
                >
            </tr>
            <tr>
                <th>Perception in Indusry</th>
                <CheatSheetCell stage={7} maturity={4} {state}
                    >Competitive advantage / unpredictable / unknown</CheatSheetCell
                >
                <CheatSheetCell stage={7} maturity={3} {state}
                    >Competitive advantage / ROl / case example</CheatSheetCell
                >
                <CheatSheetCell stage={7} maturity={2} {state}
                    >Advantage through implementation features</CheatSheetCell
                >
                <CheatSheetCell stage={7} maturity={1} {state}>
                    Cost of doing business / accepted</CheatSheetCell
                >
            </tr>
            <tr>
                <th> Focus of value</th>
                <CheatSheetCell stage={8} maturity={4} {state}
                    >High future worth</CheatSheetCell
                >
                <CheatSheetCell stage={8} maturity={3} {state}
                    >Seeking profit / ROI?</CheatSheetCell
                >
                <CheatSheetCell stage={8} maturity={2} {state}
                    >High profitability</CheatSheetCell
                >
                <CheatSheetCell stage={8} maturity={1} {state}
                    >High volume / reducing margin</CheatSheetCell
                >
            </tr>
            <tr>
                <th>Understanding</th>
                <CheatSheetCell stage={9} maturity={4} {state}
                    >Poorly understood / unpredictable</CheatSheetCell
                >
                <CheatSheetCell stage={9} maturity={3} {state}
                    >Increasing understanding / development of measures</CheatSheetCell
                >
                <CheatSheetCell stage={9} maturity={2} {state}>
                    Increasing education / constant refinement of needs /
                    measures
                </CheatSheetCell>
                <CheatSheetCell stage={9} maturity={1} {state}
                    >Believed to be well defined / stable / measurable</CheatSheetCell
                >
            </tr>
            <tr>
                <th>Comparison</th>
                <CheatSheetCell stage={10} maturity={4} {state}
                    >Constantly changing / a differential / unstable</CheatSheetCell
                >
                <CheatSheetCell stage={10} maturity={3} {state}
                    >Learning from others / testing the water / some evidential
                    support
                </CheatSheetCell>
                <CheatSheetCell stage={10} maturity={2} {state}
                    >Feature difference</CheatSheetCell
                >
                <CheatSheetCell stage={10} maturity={1} {state}
                    >Essential / operational advantage
                </CheatSheetCell>
            </tr>
            <tr>
                <th>Failure</th>
                <CheatSheetCell stage={11} maturity={4} {state}
                    >High / tolerated / assumed</CheatSheetCell
                >
                <CheatSheetCell stage={11} maturity={3} {state}
                    >Moderate / unsurprising but disappointed</CheatSheetCell
                >
                <CheatSheetCell stage={11} maturity={2} {state}
                    >Not tolerated, focus on constant improvement</CheatSheetCell
                >
                <CheatSheetCell stage={11} maturity={1} {state}
                    >Operational efficiency and surprised by failure</CheatSheetCell
                >
            </tr>
            <tr>
                <th> Market action</th>
                <CheatSheetCell stage={12} maturity={4} {state}
                    >Gambling / driven by gut</CheatSheetCell
                >
                <CheatSheetCell stage={12} maturity={3} {state}
                    >Exploring a "found" value</CheatSheetCell
                >
                <CheatSheetCell stage={12} maturity={2} {state}
                    >Market analysis / listening to customers</CheatSheetCell
                >
                <CheatSheetCell stage={12} maturity={1} {state}
                    >Metric driven / build what is needed
                </CheatSheetCell>
            </tr>
            <tr>
                <th>Efficiency</th>
                <CheatSheetCell stage={13} maturity={4} {state}
                    >Reducing the cost of change (experimentation)</CheatSheetCell
                >
                <CheatSheetCell stage={13} maturity={3} {state}
                    >Reducing cost of waste (Learning)</CheatSheetCell
                >
                <CheatSheetCell stage={13} maturity={2} {state}
                    >Reducing cost of waste (Learning)</CheatSheetCell
                >
                <CheatSheetCell stage={13} maturity={1} {state}
                    >Reducing cost of deviation (Volume)</CheatSheetCell
                >
            </tr>
            <tr>
                <th> Decision Drivers</th>
                <CheatSheetCell stage={14} maturity={4} {state}
                    >Heritage / culture</CheatSheetCell
                >
                <CheatSheetCell stage={14} maturity={3} {state}
                    >Analysis & synthesis</CheatSheetCell
                >
                <CheatSheetCell stage={14} maturity={2} {state}
                    >Analysis & synthesis</CheatSheetCell
                >
                <CheatSheetCell stage={14} maturity={1} {state}
                    >Previous experience</CheatSheetCell
                >
            </tr>
        </tbody>
    </table>
</div>

<style>
    th {
        white-space: normal;
        font-size: smaller;
        line-height: 1.2em;
        vertical-align: top;
        padding: 0.7rem;
    }
</style>
