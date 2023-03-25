import type { Item } from '../model';
import { writable } from 'svelte/store';

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
