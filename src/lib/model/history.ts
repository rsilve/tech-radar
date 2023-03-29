import type { Radar } from './radar';

type HistoryItem = {
	editedAt: string;
	radar: Radar;
};

export type History = Record<string, HistoryItem>;

export function addToHistory(radar: Radar, history: History) {
	history[radar.id] = { editedAt: new Date().toISOString(), radar };
}

export function getHistory(history: History): Radar[] {
	return Object.entries(history)
		.sort(([, a], [, b]) => a.editedAt.localeCompare(b.editedAt))
		.map(([, v]) => v.radar);
}

export function readHistory(jsonStr?: string): History {
	return JSON.parse(jsonStr || '{}');
}
