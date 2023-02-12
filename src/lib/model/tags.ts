import { unique } from 'radash'
import type { Item } from './item'

export const TAG_COLORS = [
    '#ea5545',
    '#f46a9b',
    '#ef9b20',
    '#edbf33',
    '#ede15b',
    '#bdcf32',
    '#87bc45',
    '#27aeef',
    '#b33dc6',
] as const

type Color = (typeof TAG_COLORS)[number]

export type TagColors = Record<string, Color>

export function colorsMapFactory(tags: string[]): TagColors {
    console.log(tags)
    return tags.reduce((previousValue, currentValue, currentIndex) => {
        const color =
            currentIndex < TAG_COLORS.length
                ? TAG_COLORS[currentIndex]
                : '#cccccc'
        return { ...previousValue, [currentValue]: color }
    }, {})
}

export function tagsFactory(items: Item[]) {
    return unique(
        items.reduce((list, item) => {
            return [...list, ...item.tags]
        }, [])
    ).sort()
}
