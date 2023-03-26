import { loader } from '../stores';
import { setContext } from 'svelte';

export const GLOBAL_CONTEXT = 'global-context';

export function createContext(dataString?: string) {
	let context = loader.load(dataString);

	context.items.subscribe((items) => loader.updateItems(items));
	context.adoptionLevels.subscribe((levels) => loader.updateLevels(levels));

	setContext(GLOBAL_CONTEXT, context);
}
