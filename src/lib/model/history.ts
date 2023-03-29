import { object_without_properties } from "svelte/internal"
import type { Radar } from "./radar"

type HistoryItem = {
    editedAt: string,
    radar: Radar
}

export type History = Record<string, HistoryItem>

export function addToHistory(radar: Radar, history: History) {
    history[radar.id] = {editedAt: new Date().toISOString(), radar}
}

export function getHistory(history: History) {
    Object.fromEntries(history)
}
