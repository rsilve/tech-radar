import type { Item } from './item';
import { adoptionLevels } from './constants';
import type { AdoptionLevels } from './type';
import { uid } from 'radash';

const DEFAULT_RADAR_NAME = 'Untitled';

export type Radar = {
	id: string;
	name?: string;
	items: Item[];
	categories: string[];
	adoptionLevels: AdoptionLevels;
};

export const DEFAULT_RADAR: () => Radar = () => ({
	id: uid(6),
	name: DEFAULT_RADAR_NAME,
	items: [],
	categories: [],
	adoptionLevels
});

export function readRadar(jsonStr?: string): Radar | undefined {
	if (!jsonStr) {
		return DEFAULT_RADAR();
	}
	if (jsonStr.startsWith('[')) {
		return { ...DEFAULT_RADAR(), items: JSON.parse(jsonStr || '[]') as Item[] };
	}
	if (jsonStr.startsWith('{')) {
		try {
			const value = JSON.parse(jsonStr || '{}');
			return { ...DEFAULT_RADAR(), ...value };
		} catch {}
	}
	return DEFAULT_RADAR();
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
	return { ...DEFAULT_RADAR(), ...copy, name: radarName(radar.name) };
}

export function addOrUpdateItem(list: Item[], item: Item) {
	const filtered = list.filter((v) => v.index !== item.index);
	if (
		filtered.some(
			(value) =>
				value.name.toUpperCase() === item.name.toUpperCase() &&
				value.level === item.level &&
				value.quarter === item.quarter
		)
	) {
		return filtered;
	}
	return [...filtered, { ...item }];
}

export function removeItem(list: Item[], id: number) {
	return list.filter((v) => v.index !== id);
}
