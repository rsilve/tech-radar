import type {Item} from "./type";

export type Archive = {items: Item[], categories: string[]}

export function readArchive(jsonStr: string): Archive | undefined {
    if (jsonStr.startsWith('[')) {
        return {items: JSON.parse(jsonStr || '[]') as Item[], categories: []}
    }
    if (jsonStr.startsWith('{')) {
        return JSON.parse(jsonStr || '{}') as Archive
    }
    return undefined
}

export function writeArchive(archive: Archive): string {
    return JSON.stringify(archive);
}
export function createArchive(items: Item[], categories: string[] = []): Archive {
    return {items, categories}
}
