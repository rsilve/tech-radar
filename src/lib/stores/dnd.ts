import type { Item } from '../model';
import { get, writable } from 'svelte/store';

const store = writable(null as Item);
export const dragged = { ...store, get: () => get(store) };
