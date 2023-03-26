<script lang="ts">
	import { createContext } from './GlobalContext';
	import { b64_to_utf8 } from '../utils';

	function loadFromUrl(): string | undefined {
		const url = new URL(document.location.href);
		if (url.searchParams.get('data')) {
			try {
				return b64_to_utf8(decodeURIComponent(url.searchParams.get('data')));
			} catch (e) {
				console.warn(e);
			}
		}
		return undefined;
	}

	createContext(loadFromUrl());
</script>

<slot />
