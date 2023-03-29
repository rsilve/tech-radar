import type { Item } from './item';
import { adoptionLevels } from './constants';
import type { AdoptionLevels } from './type';

export type Archive = {
	name?: string;
	items: Item[];
	categories: string[];
	adoptionLevels: AdoptionLevels;
};

export const DEFAULT_ARCHIVE: Archive = {
	name: 'No name',
	items: [],
	categories: [],
	adoptionLevels
};

export function readArchive(jsonStr?: string): Archive | undefined {
	if (!jsonStr) {
		return DEFAULT_ARCHIVE;
	}
	if (jsonStr.startsWith('[')) {
		return { ...DEFAULT_ARCHIVE, items: JSON.parse(jsonStr || '[]') as Item[] };
	}
	if (jsonStr.startsWith('{')) {
		const value = JSON.parse(jsonStr || '{}');
		return { ...DEFAULT_ARCHIVE, ...value };
	}
	return DEFAULT_ARCHIVE;
}

export function writeArchive(archive: Archive): string {
	return JSON.stringify(archive);
}
