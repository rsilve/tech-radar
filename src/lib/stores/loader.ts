import type { AdoptionLevels, Archive, Item } from '../model';
import { readArchive, writeArchive } from '../model';
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

const STORAGE_KEY = 'technos';

const store = writable(undefined as Archive);

store.subscribe((archive) => {
	if (archive) window.localStorage.setItem(STORAGE_KEY, writeArchive(archive));
});

function loadData(): Archive {
	const data = window.localStorage.getItem(STORAGE_KEY);
	return readArchive(data);
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

function contextFactory(archive: Archive) {
	console.log(archive);
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

	const loadFromStorage = (archive: Archive) => {
		store.set(archive);
		items.set(archive.items);
		adoptionLevels.set(archive.adoptionLevels);
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
		loadFromStorage
	};
}

function load() {
	const archive = loadData();
	return contextFactory(archive);
}

export const loader = { load, updateItems, updateLevels };
