import { derived, writable } from 'svelte/store'
import { createArchive } from '../model'
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

export const enhanced = derived([items, duplicate], ([$items, $duplicate]) => {
    return $items.map((item) => ({
        ...item,
        duplicate: $duplicate[item.name.toUpperCase()] > 1,
    }))
})

export const filtered = derived(
    [enhanced, searchCriteria],
    ([$enhanced, $searchCriteria]) => {
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
