import type { Item } from './item';
import { adoptionLevels } from './constants';
import type { AdoptionLevels } from './type';
import Hashids from 'hashids';

export type Radar = {
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
	name: 'No name',
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
		const value = JSON.parse(jsonStr || '{}');
		return { ...DEFAULT_RADAR(), ...value };
	}
	return DEFAULT_RADAR();
}

export function writeRadar(radar: Radar): string {
	return JSON.stringify(radar);
}
