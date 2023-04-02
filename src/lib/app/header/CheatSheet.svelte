<script lang="ts">
	import CheatSheetCell from '../components/CheatSheetCell.svelte';
	import { writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from '../GlobalContext';
	import type { AppContext } from '../../stores';

	const { adoptionLevels } = getContext<AppContext>(GLOBAL_CONTEXT);

	export let level = 0;

	const state = writable(new Array(15).fill(0));
	$: {
		state.update(() => new Array(15).fill(level));
	}
	let score = 0;
	state.subscribe((list) => {
		const defined = list.filter((value) => value > 0);
		if (defined.length > 0) {
			const sum = defined.reduce((previousValue, currentValue) => {
				return currentValue + previousValue;
			}, 0);
			score = Math.round(sum / defined.length);
		}
		return 0;
	});

	function select() {
		level = score;
	}
</script>

<div class="overflow-x-auto">
	<div class="flex w-full flex-row">
		<span class="flex-grow text-accent-focus">Select the cases that fit your perception</span>
		<div>
			Suggestion:
			{#if $adoptionLevels[score]}
				<button tabindex="-1" class="btn-outline btn-xs btn" on:click|preventDefault={select}
					>{$adoptionLevels[score]}</button
				>
			{:else}
				none
			{/if}
		</div>
	</div>

	<table class="table-compact table w-full text-xs">
		<thead>
			<tr>
				<th>Stage (of adoption)</th>
				<th>{$adoptionLevels[1]}</th>
				<th>{$adoptionLevels[2]}</th>
				<th>{$adoptionLevels[3]}</th>
				<th>{$adoptionLevels[4]}</th>
			</tr>
			<tr>
				<th colspan="5">Characteristics</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Ubiquity</th>
				<CheatSheetCell maturity={1} stage={0} {state}>Widespread and stabilising</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={0} {state}>Rapidly increasing consumption</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={0} {state}>Slowly increasing consumption</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={0} {state}>Rare</CheatSheetCell>
			</tr>
			<tr>
				<th>Certainty</th>
				<CheatSheetCell maturity={1} stage={1} {state}>Commonly understood (in terms of use)</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={1} {state}>Rapid increases in use / fit for purpose</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={1} {state}>Rapid increases in learning</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={1} {state}>Poorly understood</CheatSheetCell>
			</tr>
			<tr>
				<th>Publication Types</th>
				<CheatSheetCell maturity={1} stage={2} {state}>Focused on use</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={2} {state}
					>Maintenance / operations / installation / feature
				</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={2} {state}>Build / construct / awareness and learning</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={2} {state}>Normally describe the wonder of the thing</CheatSheetCell>
			</tr>
		</tbody>
		<thead>
			<tr>
				<th colspan="5"> General Properties</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Usages market</th>
				<CheatSheetCell maturity={1} stage={3} {state}>Mature market</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={3} {state}>Growing market</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={3} {state}>Forming market</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={3} {state}>Undefined market</CheatSheetCell>
			</tr>
			<tr>
				<th>Usages market perception</th>
				<CheatSheetCell maturity={1} stage={5} {state}>Ordered / trivial</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={5} {state}>Increasing expectation of use</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={5} {state}>Domain of experts</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={5} {state}>Chaotic</CheatSheetCell>
			</tr>
			<tr>
				<th>Knowledge management</th>
				<CheatSheetCell maturity={1} stage={4} {state}>known / accepted</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={4} {state}>Learning on operation</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={4} {state}>Learning on use</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={4} {state}>Uncertain</CheatSheetCell>
			</tr>

			<tr>
				<th>User perception</th>
				<CheatSheetCell maturity={1} stage={6} {state}>Standard / expected</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={6} {state}>Common / disappointed if not used or available</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={6} {state}>Leading edge / emerging</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={6} {state}>Different / confusing / exciting / surprising</CheatSheetCell>
			</tr>
			<tr>
				<th>Perception of advantage</th>
				<CheatSheetCell maturity={1} stage={7} {state}>Cost of doing business / accepted</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={7} {state}>Advantage through implementation features</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={7} {state}>Competitive advantage / ROI / case example</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={7} {state}>Competitive advantage / unpredictable / unknown</CheatSheetCell>
			</tr>
			<tr>
				<th>Focus of value</th>
				<CheatSheetCell maturity={1} stage={8} {state}>High volume / reducing margin</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={8} {state}>High profitability</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={8} {state}>Seeking profit / ROI?</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={8} {state}>High future worth</CheatSheetCell>
			</tr>
			<tr>
				<th>Understanding</th>
				<CheatSheetCell maturity={1} stage={9} {state}
					>Believed to be well defined / stable / measurable
				</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={9} {state}>
					Increasing education / constant refinement of needs / measures
				</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={9} {state}
					>Increasing understanding / development of measures
				</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={9} {state}>Poorly understood / unpredictable</CheatSheetCell>
			</tr>
			<tr>
				<th>Comparison</th>
				<CheatSheetCell maturity={1} stage={10} {state}>Essential / operational advantage</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={10} {state}>Feature difference</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={10} {state}
					>Learning from others / testing the water / some evidential support
				</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={10} {state}>Constantly changing / a differential / unstable</CheatSheetCell>
			</tr>
			<tr>
				<th>Failure</th>
				<CheatSheetCell maturity={1} stage={11} {state}>Operational efficiency and surprised by failure</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={11} {state}>Not tolerated, focus on constant improvement</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={11} {state}>Moderate / unsurprising but disappointed</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={11} {state}>High / tolerated / assumed</CheatSheetCell>
			</tr>
			<tr>
				<th> Market action</th>
				<CheatSheetCell maturity={1} stage={12} {state}>Metric driven / build what is needed</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={12} {state}>Market analysis / listening to customers</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={12} {state}>Exploring a "found" value</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={12} {state}>Gambling / driven by gut</CheatSheetCell>
			</tr>
			<tr>
				<th>Efficiency</th>
				<CheatSheetCell maturity={1} stage={13} {state}>Reducing cost of deviation (Volume)</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={13} {state}>Reducing cost of waste (Learning)</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={13} {state}>Reducing cost of waste (Learning)</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={13} {state}>Reducing the cost of change (experimentation)</CheatSheetCell>
			</tr>
			<tr>
				<th> Decision Drivers</th>
				<CheatSheetCell maturity={1} stage={14} {state}>Previous experience</CheatSheetCell>
				<CheatSheetCell maturity={2} stage={14} {state}>Analysis & synthesis</CheatSheetCell>
				<CheatSheetCell maturity={3} stage={14} {state}>Analysis & synthesis</CheatSheetCell>
				<CheatSheetCell maturity={4} stage={14} {state}>Heritage / culture</CheatSheetCell>
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
