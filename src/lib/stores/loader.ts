import type { AdoptionLevels, Item, Radar } from '../model';
import { DEFAULT_RADAR, type History, readHistory, readRadar, writeRadar } from '../model';
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
const STORAGE_HISTORY_KEY = 'tech-radar-history';

const store = writable(undefined as Radar);
const historyStore = writable({} as History);

store.subscribe((radar) => {
	if (radar) {
		window.localStorage.setItem(STORAGE_KEY, writeRadar(radar));
		historyStore.update((history) => {
			history[radar.id] = { editedAt: new Date().toISOString(), radar };
			return history;
		});
	}
});

historyStore.subscribe((history) => {
	window.localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(history));
});

function loadFromStorage(): string {
	return window.localStorage.getItem(STORAGE_KEY);
}

function loadHistoryFromStorage(): string {
	return window.localStorage.getItem(STORAGE_HISTORY_KEY);
}

function updateItems(list: Item[]) {
	store.update((radar) => {
		return { ...radar, items: list };
	});
}

function updateLevels(levels: AdoptionLevels) {
	store.update((radar) => {
		return { ...radar, adoptionLevels: levels };
	});
}

function contextFactory(radar: Radar, history: History) {
	store.update(() => radar);
	historyStore.update(() => history);
	const items = itemsStoreFactory(radar.items);
	const index = indexStoreFactory(items);
	const duplicate = duplicateStoreFactory(items);
	const enhanced = enhancedStoreFactory(items, duplicate);
	const filtered = filteredStoreFactory(enhanced);
	const tags = tagsStoreFactory(items);
	const colorMap = colorsMapStoreFactory(tags);
	const tagsCount = tagsCountStoreFactory(items);
	const adoptionLevels = adoptionLevelsStoreFactory(radar.adoptionLevels);
	const share = shareStoreFactory(store);
	const loadFromStorage = (radar: Radar) => {
		store.set(radar);
		items.set(radar.items);
		adoptionLevels.set(radar.adoptionLevels);
	};
	const reset = () => {
		const radar = DEFAULT_RADAR();
		store.set(radar);
		items.set(radar.items);
		adoptionLevels.set(radar.adoptionLevels);
	};
	return {
		radar: store,
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
		reset,
		history: historyStore
	};
}

function load(dataString?: string) {
	const data = dataString || loadFromStorage();
	const radar = readRadar(data);
	const historyData = loadHistoryFromStorage();
	const history = readHistory(historyData);
	return contextFactory(radar, history);
}

export const loader = { load, updateItems, updateLevels };
