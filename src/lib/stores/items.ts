import { generatePoints, type Item } from '../model';
import { get, writable } from 'svelte/store';
import { selected } from './selected';

function comparator(a: Item, b: Item) {
	return a.index - b.index;
}

function normalize(items: Item[]) {
	items.map((item) => (item.tags = item.tags ?? []));
}

export function itemsStoreFactory(items: Item[]) {
	const store = writable(items as Item[]);
	const { subscribe, update } = store;
	subscribe((list: Item[]) => {
		normalize(list);
		generatePoints(list.sort(comparator));
	});
	return {
		...store,
		addOrUpdate: (item: Item) => {
			update((list: Item[]) => {
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
			});
		},
		remove: (id: number) => {
			update((list) => list.filter((v) => v.index !== id));
		},
		select: (id: number) => {
			selected.update(() => {
				return get(store)
					.filter((v) => v.index === id)
					.at(0);
			});
		}
	};
}
