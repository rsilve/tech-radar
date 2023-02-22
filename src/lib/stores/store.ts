import { derived, get, writable } from 'svelte/store'
import { createArchive, type Item } from '../model'
import { items } from './items'

export const searchCriteria = writable(null as string)

export const index = derived(items, ($items) => {
    const last = $items.reduce(
        (previousValue, currentValue) =>
            Math.max(previousValue, currentValue.index),
        0
    )
    return last + 1
})

export const filtered = derived(
    [items, searchCriteria],
    ([$items, $searchCriteria]) => {
        return $items.filter((item) => {
            if ($searchCriteria) {
                return $searchCriteria
                    .trim()
                    .replaceAll(/\s+/g, ' ')
                    .split(' ')
                    .map((criteria) => criteria.toUpperCase())
                    .some((criteria) => {
                        return (
                            item.name.toUpperCase().includes(criteria) ||
                            item.tags
                                .map((tag) => tag.toUpperCase())
                                .some((tag) => tag.includes(criteria))
                        )
                    })
            }
            return true
        })
    }
)

export const archive = derived(items, ($items) => {
    return createArchive($items)
})

export const duplicate = derived(items, ($items) => {
    return $items.reduce((previousValue, currentValue) => {
        const name = currentValue.name.toUpperCase()
        const count = previousValue[name] || 0
        return { ...previousValue, [name]: count + 1 }
    }, {})
})

export function hasDuplicate(item?: Item) {
    if (!item) return false
    return (get(duplicate)[item?.name.toUpperCase()] || 0) > 1
}

export function hasTagsOrDuplicate(item: Item) {
    return (
        item.tags.length > 0 ||
        (get(duplicate)[item?.name.toUpperCase()] || 0) > 1
    )
}
