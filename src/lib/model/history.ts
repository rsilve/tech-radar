import type { Radar } from './radar';

export type HistoryItem = {
	editedAt: string;
	radar: Radar;
};

export type History = Record<string, HistoryItem>;

export function addToHistory(radar: Radar, history: History) {
	history[radar.id] = { editedAt: new Date().toISOString(), radar };
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
		return JSON.parse(jsonStr || '{}');
	} catch {
		return {};
	}
}
