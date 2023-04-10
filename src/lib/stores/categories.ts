import { type Writable, writable } from 'svelte/store';
import { categories as origin, type Categories } from '../model';

export const categoriesStoreFactory = (categories: Categories): Writable<Categories> => {
	return writable({ ...origin, ...categories });
};
