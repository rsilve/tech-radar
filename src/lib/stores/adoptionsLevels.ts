import { type Writable, writable } from 'svelte/store';
import { type AdoptionLevels, adoptionLevels as origin } from '../model';

export const adoptionLevelsStoreFactory = (levels: AdoptionLevels): Writable<AdoptionLevels> => {
	return writable({ ...origin, ...levels });
};
