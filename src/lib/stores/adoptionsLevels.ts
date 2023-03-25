import { writable } from 'svelte/store';
import { type AdoptionLevels, adoptionLevels as origin } from '../model';

export const adoptionLevelsStoreFactory = (levels: AdoptionLevels) => {
	return writable({ ...origin, ...levels });
};
