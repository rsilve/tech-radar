import { derived, type Readable, type Writable } from 'svelte/store';

import { colorsMapFactory, type Item, tagsCountFromItems, tagsFactory } from '../model';

export const tagsStoreFactory = (items: Writable<Item[]>) =>
	derived(items, ($items) => {
		return tagsFactory($items);
	});

export const colorsMapStoreFactory = (tags: Readable<string[]>) =>
	derived(tags, ($tags) => {
		return colorsMapFactory($tags);
	});

export const tagsCountStoreFactory = (items: Writable<Item[]>) =>
	derived(items, ($items) => {
		return tagsCountFromItems($items);
	});
