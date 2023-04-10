import type { Radar } from './radar';
import { isArray } from 'radash';
import { categories } from './constants';

export type HistoryItem = {
	editedAt: string;
	radar: Radar;
};

export type History = Record<string, HistoryItem>;

export function addToHistory(radar: Radar, history: History) {
	history[radar.id] = { editedAt: new Date().toISOString(), radar };
}

export function removeFromHistory(radar: Radar, history: History) {
	delete history[radar.id];
}

export function getHistory(history: History): HistoryItem[] {
	return Object.entries(history)
		.sort(([, a], [, b]) => b.editedAt.localeCompare(a.editedAt))
		.map(([, v]) => v)
		.slice(1);
}

export function readHistory(jsonStr?: string): History {
	if (!jsonStr) {
		return {};
	}
	try {
		const history: History = JSON.parse(jsonStr || '{}');
		Object.entries(history).forEach(([, item]) => {
			const c = item.radar.categories;
			if (c && isArray(c) && c.length === 0) {
				item.radar.categories = categories;
			}
		});
		return history;
	} catch {
		return {};
	}
}
