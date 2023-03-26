import type { Readable } from 'svelte/store';
import { derived } from 'svelte/store';
import type { Archive } from '../model';
import { writeArchive } from '../model';
import { utf8_to_b64 } from '../utils';

export const shareStoreFactory = (archive: Readable<Archive>) =>
	derived(archive, ($archive) => {
		return utf8_to_b64(writeArchive($archive));
	});
