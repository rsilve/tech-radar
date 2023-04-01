import type { Item } from './item';
import { adoptionLevels } from './constants';
import type { AdoptionLevels } from './type';
import Hashids from 'hashids';

const DEFAULT_RADAR_NAME = 'Untitled';

export type Radar = {
	id: string;
	name?: string;
	items: Item[];
	categories: string[];
	adoptionLevels: AdoptionLevels;
};

function generateId(): string {
	const hashids = new Hashids((Math.random() * 10000).toString());
	return hashids.encode(new Date().getTime());
}

export const DEFAULT_RADAR: () => Radar = () => ({
	id: generateId(),
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
