import type { Readable } from 'svelte/store';
import { derived } from 'svelte/store';
import type { Radar } from '../model';
import { writeRadar } from '../model';
import { utf8_to_b64 } from '../utils';

export const shareStoreFactory = (radar: Readable<Radar>) =>
	derived(radar, ($radar) => {
		return utf8_to_b64(writeRadar($radar));
	});
