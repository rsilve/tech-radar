<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Target from './Target.svelte';
	import BlipStack from './BlipStack.svelte';
	import BlipNumber from './BlipNumber.svelte';
	import { type Item, TAG_COLORS } from '../../../model';
	import BlipDuplicate from './BlipDuplicate.svelte';
	import BlipTag from './BlipTag.svelte';

	export let Hst: HstType;

	let radius = 50;

	const item: Item = {
		name: 'name',
		level: 1,
		quarter: 4,
		index: 1,
		x: 0.5,
		y: 0.5,
		tags: ['dev', 'test'],
		direction: 1
	};
</script>

<Hst.Story>
	<Hst.Variant>
		<div style="background: white; padding: 1em; height: 50%">
			<div style="position: relative; aspect-ratio: 1; border: 1px dotted #ccc; ">
				<Target />
				<BlipStack {radius} {item}>
					<BlipDuplicate />
					<BlipTag color={TAG_COLORS[1]} />
					<BlipTag color={TAG_COLORS[2]} />
					<BlipNumber {item} />
				</BlipStack>
				<BlipStack {radius} item={{ ...item }}>
					<div class="h-1 w-1 rounded-full border border-slate-200" />
				</BlipStack>
			</div>
		</div>
	</Hst.Variant>
	<Hst.Variant>
		<div style="background: white; padding: 1em; height: 50%">
			<div style="position: relative; aspect-ratio: 1; border: 1px dotted #ccc; ">
				<Target />
				<BlipStack {radius} item={{ ...item, x: 0 }}>
					<div class="h-1 w-1 rounded-full bg-slate-50" />
				</BlipStack>

				<BlipStack {radius} item={{ ...item, x: 0.1 }}>
					<div class="h-1 w-1 rounded-full bg-slate-50" />
				</BlipStack>

				<BlipStack {radius} item={{ ...item, x: 0.2 }}>
					<div class="h-1 w-1 rounded-full bg-slate-50" />
				</BlipStack>
				<BlipStack {radius} item={{ ...item, x: 0.3 }}>
					<div class="h-1 w-1 rounded-full bg-slate-50" />
				</BlipStack>
				<BlipStack {radius} item={{ ...item, x: 0.4 }}>
					<div class="h-1 w-1 rounded-full bg-slate-50" />
				</BlipStack>
				<BlipStack {radius} item={{ ...item, x: 0.5 }}>
					<div class="h-2 w-2 rounded-full bg-slate-50" />
				</BlipStack>
				<BlipStack {radius} item={{ ...item, x: 0.6 }}>
					<div class="h-1 w-1 rounded-full bg-slate-50" />
				</BlipStack>
				<BlipStack {radius} item={{ ...item, x: 0.7 }}>
					<div class="h-1 w-1 rounded-full bg-slate-50" />
				</BlipStack>
				<BlipStack {radius} item={{ ...item, x: 0.8 }}>
					<div class="h-1 w-1 rounded-full bg-slate-50" />
				</BlipStack>
				<BlipStack {radius} item={{ ...item, x: 0.9 }}>
					<div class="h-1 w-1 rounded-full bg-slate-50" />
				</BlipStack>
				<BlipStack {radius} item={{ ...item, x: 1 }}>
					<div class="h-1 w-1 rounded-full bg-slate-50" />
				</BlipStack>
			</div>
		</div>
	</Hst.Variant>

	<Hst.Variant>
		<div style="background: white; padding: 1em; height: 50%">
			<div style="position: relative; aspect-ratio: 1; border: 1px dotted #ccc; ">
				<Target />
				<BlipStack {radius} item={{ ...item }}>
					<div class="h-1 w-1 rounded-full border border-slate-200" />
				</BlipStack>
				<BlipStack {radius} item={{ ...item }}>
					<div class="-mr-3 h-4 w-4 rounded-full border border-slate-300" />
					<div class="-mr-3 h-4 w-4 rounded-full border border-slate-300" />

					<div class="flex h-5 w-5 items-center justify-center rounded-full border border-slate-50">
						<div
							class="flex h-4 w-4 items-center justify-center rounded-full border border-dotted border-slate-50"
						>
							1
						</div>
					</div>
				</BlipStack>
			</div>
		</div>
	</Hst.Variant>
</Hst.Story>
