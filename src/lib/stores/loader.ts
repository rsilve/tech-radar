import type { AdoptionLevels, Radar, Item } from '../model';
import { DEFAULT_RADAR, readRadar, writeRadar } from '../model';
import { writable } from 'svelte/store';
import { itemsStoreFactory } from './items';
import {
	duplicateStoreFactory,
	enhancedStoreFactory,
	filteredStoreFactory,
	indexStoreFactory
} from './store';
import { colorsMapStoreFactory, tagsCountStoreFactory, tagsStoreFactory } from './tags';
import { adoptionLevelsStoreFactory } from './adoptionsLevels';
import { shareStoreFactory } from './share';

const STORAGE_KEY = 'technos';

const store = writable(undefined as Radar);

store.subscribe((archive) => {
	if (archive) window.localStorage.setItem(STORAGE_KEY, writeRadar(archive));
});

function loadFromStorage(): string {
	return window.localStorage.getItem(STORAGE_KEY);
}

function updateItems(list: Item[]) {
	store.update((archive) => {
		return { ...archive, items: list };
	});
}

function updateLevels(levels: AdoptionLevels) {
	store.update((archive) => {
		return { ...archive, adoptionLevels: levels };
	});
}

function contextFactory(archive: Radar) {
	store.update(() => archive);
	const items = itemsStoreFactory(archive.items);
	const index = indexStoreFactory(items);
	const duplicate = duplicateStoreFactory(items);
	const enhanced = enhancedStoreFactory(items, duplicate);
	const filtered = filteredStoreFactory(enhanced);
	const tags = tagsStoreFactory(items);
	const colorMap = colorsMapStoreFactory(tags);
	const tagsCount = tagsCountStoreFactory(items);
	const adoptionLevels = adoptionLevelsStoreFactory(archive.adoptionLevels);
	const share = shareStoreFactory(store);
	const loadFromStorage = (archive: Radar) => {
		store.set(archive);
		items.set(archive.items);
		adoptionLevels.set(archive.adoptionLevels);
	};
	const reset = () => {
		store.set(DEFAULT_RADAR);
		items.set(DEFAULT_RADAR.items);
		adoptionLevels.set(DEFAULT_RADAR.adoptionLevels);
	};
	return {
		archive: store,
		items,
		index,
		duplicate,
		enhanced,
		filtered,
		tags,
		colorMap,
		tagsCount,
		adoptionLevels,
		share,
		loadFromStorage,
		reset
	};
}

function load(dataString?: string) {
	const data = dataString || loadFromStorage();
	const archive = readRadar(data);
	return contextFactory(archive);
}

export const loader = { load, updateItems, updateLevels };
