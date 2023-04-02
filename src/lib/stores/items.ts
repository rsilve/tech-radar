import { generatePoints, type Item } from '../model';
import { writable } from 'svelte/store';

function comparator(a: Item, b: Item) {
	return a.index - b.index;
}

function normalize(items: Item[]) {
	items.map((item) => (item.tags = item.tags ?? []));
}

export function itemsStoreFactory(items: Item[]) {
	const store = writable(items as Item[]);
	const { subscribe } = store;
	subscribe((list: Item[]) => {
		normalize(list);
		generatePoints(list.sort(comparator));
	});
	return store;
}
