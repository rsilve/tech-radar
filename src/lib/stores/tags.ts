import { items } from './items'
import { derived } from 'svelte/store'

import { colorsMapFactory, tagsFactory } from '../model'

export const tags = derived(items, ($items) => {
    return tagsFactory($items)
})

export const colorMap = derived(tags, ($tags) => {
    return colorsMapFactory($tags)
})
