import { loader } from '../stores';
import { setContext } from 'svelte';

export const GLOBAL_CONTEXT = 'global-context';

export function createContext(dataString?: string) {
	let context = loader.load(dataString);

	context.items.subscribe((items) => loader.updateItems(items));
	context.adoptionLevels.subscribe((levels) => loader.updateLevels(levels));
	context.share.subscribe((b64) => {
		const url = new URL(document.location.href);
		url.searchParams.set('data', encodeURIComponent(b64));
		console.log(url.toString());
	});

	setContext(GLOBAL_CONTEXT, context);
}
