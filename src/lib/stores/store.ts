import { derived, writable } from 'svelte/store'
import type { Item } from '../model'
import { createArchive } from '../model'
import { items } from './items'

export const selected = writable(null as Item)

export const edited = writable(null as Item)

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
