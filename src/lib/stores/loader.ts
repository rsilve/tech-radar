import type { Archive, Item } from '../model';
import { DEFAULT_ARCHIVE, writeArchive } from '../model';
import { writable } from 'svelte/store';
import { itemsStoreFactory } from './items';
import {
	archiveStoreFactory,
	duplicateStoreFactory,
	enhancedStoreFactory,
	filteredStoreFactory,
	indexStoreFactory
} from './store';
import { colorsMapStoreFactory, tagsCountStoreFactory, tagsStoreFactory } from './tags';

const STORAGE_KEY = 'technos';

const store = writable(undefined as Archive);

store.subscribe((archive) => {
	if (archive) window.localStorage.setItem(STORAGE_KEY, writeArchive(archive));
});

function loadData(): Archive {
	const data = window.localStorage.getItem(STORAGE_KEY);
	if (!data) {
		return DEFAULT_ARCHIVE;
	}
	if (data.startsWith('[')) {
		const items = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]') as Item[];
		return { items, categories: [] };
	}

	if (data.startsWith('{')) {
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}') as Archive;
	}

	return DEFAULT_ARCHIVE;
}

function persist(list: Item[]) {
	store.update((archive) => {
		return { ...archive, items: list };
	});
}

function load() {
	const archive = loadData();
	store.update(() => archive);
	const items = itemsStoreFactory(archive.items);
	const index = indexStoreFactory(items);
	const archiveStore = archiveStoreFactory(items);
	const duplicate = duplicateStoreFactory(items);
	const enhanced = enhancedStoreFactory(items, duplicate);
	const filtered = filteredStoreFactory(enhanced);
	const tags = tagsStoreFactory(items);
	const colorMap = colorsMapStoreFactory(tags);
	const tagsCount = tagsCountStoreFactory(items);
	return {
		items,
		index,
		archive: archiveStore,
		duplicate,
		enhanced,
		filtered,
		tags,
		colorMap,
		tagsCount
	};
}

export const loader = { ...store, load, persist };
