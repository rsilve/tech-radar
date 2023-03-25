import { loader } from '../stores';
import { setContext } from 'svelte';

export const GLOBAL_CONTEXT = 'global-context';

export function createContext() {
	let context = loader.load();

	context.items.subscribe((items) => loader.updateItems(items));
	context.adoptionLevels.subscribe((levels) => loader.updateLevels(levels));

	setContext(GLOBAL_CONTEXT, context);
}
