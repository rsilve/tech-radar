import { items } from './items'
import { derived } from 'svelte/store'

// [“#ea5545”, “#f46a9b”, “#ef9b20”, “#edbf33”, “#ede15b”, “#bdcf32”, “#87bc45”, “#27aeef”, “#b33dc6”]

export const tags = derived(items, ($items) => {
    const tags = $items.reduce((previousValue, currentValue) => {
        return [...previousValue, currentValue.tags]
    }, [])
    return tags.sort()
})
