import { writable } from 'svelte/store';
import { adoptionLevels as origin } from '../model';

const store = writable({ ...origin });

export const adoptionLevels = store;
