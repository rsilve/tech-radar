import {derived, writable} from "svelte/store";
import type {Item} from "../model";
import {createArchive} from "../model";
import {items} from "./items";

export const selected = writable(null as Item)

export const edited = writable(null as Item)

export const searchCriteria = writable(null as string)

export const index = derived(items, ($items) => {
    const last = $items.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue.index), 0)
    return last + 1;
});

export const filtered = derived([items, searchCriteria], ([$items, $searchCriteria]) => {
    return $items.filter((item) => {
        if ($searchCriteria) {
            return item.name.toUpperCase().includes($searchCriteria.toUpperCase())
        }
        return true;
    })
})

export const archive = derived(items, ($items) => {
    return createArchive($items)
})