import { generatePoints, type Item } from '../model'
import { writable } from 'svelte/store'

function comparator(a: Item, b: Item) {
    return a.index - b.index
}

const STORAGE_KEY = 'technos'

function normalize(items: Item[]) {
    items.map((item) => (item.tags = item.tags ?? []))
}

function persist(list: Item[]) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
}

function load(): Item[] {
    const items = JSON.parse(
        window.localStorage.getItem(STORAGE_KEY) || '[]'
    ) as Item[]
    normalize(items)
    return items
}

function create() {
    const { subscribe, update, set } = writable(load())
    subscribe((list: Item[]) => {
        normalize(list)
        generatePoints(list.sort(comparator))
        persist(list)
    })
    return {
        subscribe,
        set,
        add: (item: Item) => {
            console.log('add')
            update((list: Item[]) => {
                if (
                    list.some(
                        (value) =>
                            value.name.toUpperCase() ===
                                item.name.toUpperCase() &&
                            value.level === item.level &&
                            value.quarter === item.quarter
                    )
                ) {
                    return list
                }
                return [...list, { ...item }]
            })
        },
        update: (item: Item) => {
            console.log('update', item)
            update((list: Item[]) => {
                const filtered = list.filter((v) => v.index !== item.index)
                if (
                    filtered.some(
                        (value) =>
                            value.name.toUpperCase() ===
                                item.name.toUpperCase() &&
                            value.level === item.level &&
                            value.quarter === item.quarter
                    )
                ) {
                    return filtered
                }
                return [...filtered, { ...item }]
            })
        },
        remove: (id: number) => {
            update((list) => list.filter((v) => v.index !== id))
        },
    }
}

export const items = create()
