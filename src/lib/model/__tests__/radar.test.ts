import { describe, expect, it } from 'vitest';
import type { Radar } from '../radar';
import { DEFAULT_RADAR, mergeRadar } from '../radar';
import { DEFAULT_ITEM, type Item } from '../item';

describe('merge radar', () => {
	it('basic', () => {
		const a: Radar = {
			...DEFAULT_RADAR(),
			id: 'a',
			name: 'A',
			items: []
		};

		const b: Radar = {
			...DEFAULT_RADAR(),
			id: 'b',
			name: 'B',
			items: []
		};

		const merge = mergeRadar(a, b);
		expect(merge.items).toEqual([]);
	});

	it('a to b', () => {
		const item = DEFAULT_ITEM();
		const a: Radar = {
			...DEFAULT_RADAR(),
			id: 'a',
			name: 'A',
			items: [item]
		};

		const b: Radar = {
			...DEFAULT_RADAR(),
			id: 'b',
			name: 'B',
			items: []
		};

		const merge = mergeRadar(a, b);
		expect(merge.items[0].name).toEqual(item.name);
		expect(merge.items[0].tags).toEqual(['A']);
	});

	it('a and b similar', () => {
		const itemA = DEFAULT_ITEM();
		const a: Radar = {
			...DEFAULT_RADAR(),
			id: 'a',
			name: 'A',
			items: [itemA]
		};

		const b: Radar = {
			...DEFAULT_RADAR(),
			id: 'b',
			name: 'B',
			items: [itemA]
		};

		const merge = mergeRadar(a, b);
		expect(merge.items[0].name).toEqual(itemA.name);
		expect(merge.items[0].tags).toEqual(['B']);
	});

	it('a and b different', () => {
		const itemA = DEFAULT_ITEM();
		const a: Radar = {
			...DEFAULT_RADAR(),
			id: 'a',
			name: 'A',
			items: [itemA]
		};

		const itemB: Item = { ...DEFAULT_ITEM(), quarter: 2 };
		const b: Radar = {
			...DEFAULT_RADAR(),
			id: 'b',
			name: 'B',
			items: [itemB]
		};

		const merge = mergeRadar(a, b);
		expect(merge.items.length).toEqual(2);
	});
});
