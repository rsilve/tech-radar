import { generatePoints, type Item } from '../model';
import { get, writable } from 'svelte/store';

export const selectedStore = writable(null as Item);
export const selected = {
	...selectedStore,
	toggle: (item: Item) => {
		selectedStore.update((current) => {
			if (current && current.index == item.index) {
				return null;
			} else {
				return { ...item };
			}
		});
	}
};

function comparator(a: Item, b: Item) {
	return a.index - b.index;
}

const STORAGE_KEY = 'technos';

function normalize(items: Item[]) {
	items.map((item) => (item.tags = item.tags ?? []));
}

function persist(list: Item[]) {
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function load(): Item[] {
	const items = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]') as Item[];
	normalize(items);
	return items;
}

function create() {
	const { subscribe, update, set } = writable(load());
	subscribe((list: Item[]) => {
		normalize(list);
		generatePoints(list.sort(comparator));
		persist(list);
	});
	return {
		subscribe,
		set,
		add: (item: Item) => {
			update((list: Item[]) => {
				if (
					list.some(
						(value) =>
							value.name.toUpperCase() === item.name.toUpperCase() &&
							value.level === item.level &&
							value.quarter === item.quarter
					)
				) {
					return list;
				}
				return [...list, { ...item }];
			});
		},
		update: (item: Item) => {
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
				return get(items)
					.filter((v) => v.index === id)
					.at(0);
			});
		}
	};
}

export const items = create();
