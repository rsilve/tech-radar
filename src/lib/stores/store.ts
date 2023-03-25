import { derived, type Readable, type Writable } from 'svelte/store';
import { selected } from './selected';
import { searchCriteria } from './searchCriteria';
import type { Item } from '../model';

export const indexStoreFactory = (items: Writable<Item[]>) =>
	derived(items, ($items) => {
		const last = $items.reduce(
			(previousValue, currentValue) => Math.max(previousValue, currentValue.index),
			0
		);
		return last + 1;
	});

export const duplicateStoreFactory = (items: Writable<Item[]>) =>
	derived(items, ($items) => {
		return $items.reduce((previousValue, currentValue) => {
			const name = currentValue.name.toUpperCase();
			const count = previousValue[name] || 0;
			return { ...previousValue, [name]: count + 1 };
		}, {} as Record<string, number>);
	});

export const enhancedStoreFactory = (
	items: Writable<Item[]>,
	duplicate: Readable<Record<string, number>>
) =>
	derived([items, duplicate, selected], ([$items, $duplicate, $selected]) => {
		return $items.map((item) => ({
			...item,
			duplicate: $duplicate[item.name.toUpperCase()] > 1,
			selected: $selected?.index === item.index
		}));
	});

export const filteredStoreFactory = (enhanced: Readable<Item[]>) =>
	derived([enhanced, searchCriteria], ([$enhanced, $searchCriteria]) => {
		return $enhanced.filter((item) => {
			if ($searchCriteria) {
				return $searchCriteria
					.trim()
					.replaceAll(/\s+/g, ' ')
					.split(' ')
					.map((criteria) => criteria.toUpperCase())
					.some((criteria) => {
						return (
							item.name.toUpperCase().includes(criteria) ||
							item.tags.map((tag) => tag.toUpperCase()).some((tag) => tag.includes(criteria))
						);
					});
			}
			return true;
		});
	});
