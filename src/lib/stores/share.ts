import type { Readable } from 'svelte/store';
import { derived } from 'svelte/store';
import type { Radar } from '../model';
import { writeRadar } from '../model';
import { utf8_to_b64 } from '../utils';

export const shareStoreFactory = (archive: Readable<Radar>) =>
	derived(archive, ($archive) => {
		return utf8_to_b64(writeRadar($archive));
	});
