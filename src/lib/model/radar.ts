import type { Item } from './item';
import { addTag, DEFAULT_ITEM, mergeTag } from './item';
import { adoptionLevels, categories } from './constants';
import type { AdoptionLevels, Categories } from './type';
import { isArray, isString, uid } from 'radash';

const DEFAULT_RADAR_NAME = 'Untitled';

export type Radar = {
	id: string;
	name?: string;
	items: Item[];
	categories: Categories;
	adoptionLevels: AdoptionLevels;
};

function generateId(): string {
	return uid(6);
}

export const DEFAULT_RADAR: () => Radar = () => ({
	id: generateId(),
	name: DEFAULT_RADAR_NAME,
	items: [],
	categories,
	adoptionLevels
});

function normalize(radar: Radar) {
	radar.items.forEach((item) => {
		if (!isString(item.index)) {
			item.index = generateId();
		}
	});
}

export function readRadar(jsonStr?: string): Radar | undefined {
	let radar = DEFAULT_RADAR();
	if (!jsonStr) {
		radar = DEFAULT_RADAR();
	} else if (jsonStr.startsWith('[')) {
		radar = { ...DEFAULT_RADAR(), items: JSON.parse(jsonStr || '[]') as Item[] };
	} else if (jsonStr.startsWith('{')) {
		try {
			const value = JSON.parse(jsonStr || '{}');
			if (value['categories'] && isArray(value['categories']) && value['categories'].length === 0) {
				delete value['categories'];
			}
			radar = { ...DEFAULT_RADAR(), ...value };
		} catch {}
	}
	normalize(radar);
	return radar;
}

export function writeRadar(radar: Radar): string {
	return JSON.stringify(radar);
}

function radarName(name: string) {
	if (name.startsWith('Copy of') || name === 'Untitled') {
		return name;
	}
	return `Copy of ${name}`;
}

export function copyRadar(radar: Radar) {
	const copy = { ...radar };
	delete copy.id;
	const newRadar: Radar = JSON.parse(JSON.stringify({ ...DEFAULT_RADAR(), ...copy, name: radarName(radar.name) }));
	newRadar.items.forEach((item) => (item.index = generateId()));
	return newRadar;
}

export function addOrUpdateItem(list: Item[], item: Item) {
	const itemToProcess = { ...DEFAULT_ITEM(), ...item };

	const filtered = list.filter((v) => v.index !== itemToProcess.index);
	if (
		filtered.some(
			(value) =>
				value.name.toUpperCase() === itemToProcess.name.toUpperCase() &&
				value.level === itemToProcess.level &&
				value.quarter === itemToProcess.quarter
		)
	) {
		return filtered;
	}
	return [...filtered, { ...itemToProcess }];
}

export function removeItem(list: Item[], id: string) {
	return list.filter((v) => v.index !== id);
}

function findSimilarItem(items: Item[], item: Item): Item {
	const equivalent = items.find((value) => {
		if (
			value.name.toUpperCase() === item.name.toUpperCase() &&
			value.level === item.level &&
			value.quarter === item.quarter
		) {
			return value;
		}
	});
	return equivalent || item;
}

function mergeItems(itemA: Item, itemB: Item): Item {
	return { ...itemA, ...itemB, tags: mergeTag(itemA.tags, itemB.tags) };
}

export function mergeRadar(radar: Radar, dest: Radar): Radar {
	let items: Item[] = JSON.parse(JSON.stringify(dest.items));
	items.forEach((item) => {
		item.tags = addTag(dest.name, item.tags);
	});
	radar.items.forEach((item) => {
		const similar = findSimilarItem(items, item);
		let merged = mergeItems(similar, item);
		delete merged.index;
		const tags = addTag(radar.name, merged.tags);
		merged = { ...merged, tags };
		items = addOrUpdateItem(items, merged);
	});
	return JSON.parse(JSON.stringify({ ...dest, items }));
}
