import type { Item } from '../model'

function sortTags(a: string[], b: string[]) {
    if (a.length === 0 && b.length === 0) {
        return 0
    }
    if (a.length === 0) {
        return -1
    }
    if (b.length === 0) {
        return 1
    }
    if (a.length >= 1 && b.length >= 1) {
        const order = a[0].localeCompare(b[0])
        if (order === 0) {
            return sortTags(a.splice(1), b.splice(1))
        }
        return order
    }
}
export function sortByTags(a: Item, b: Item) {
    const order = sortTags([...a.tags], [...b.tags])
    if (order === 0) {
        return a.name.toUpperCase().localeCompare(b.name.toUpperCase())
    }
    return order
}
