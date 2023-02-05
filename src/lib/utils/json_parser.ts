import type {Archive, Item} from "../type";

export function parse(jsonStr: string): Archive | undefined {
    if (jsonStr.startsWith('[')) {
        return {items: JSON.parse(jsonStr || '[]') as Item[], categories: []}
    }
    if (jsonStr.startsWith('{')) {
        return JSON.parse(jsonStr || '{}') as Archive
    }
    return undefined
}