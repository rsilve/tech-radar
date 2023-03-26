<script lang="ts">
	import ShareIcon from '../components/icons/ShareIcon.svelte';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from '../GlobalContext';

	const { share } = getContext(GLOBAL_CONTEXT);

	let copied = false;
	async function copyLink() {
		const url = new URL(document.location.href);
		url.searchParams.set('data', encodeURIComponent($share));
		await navigator.clipboard.writeText(url.toString());
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<div class="cursor-pointer whitespace-nowrap pt-2 pb-2" on:click={copyLink}>
	<ShareIcon /> <span class="flex-grow">Share</span>
	{#if copied}<span class="badge-success badge badge-sm">URL copied to clipboard</span>{/if}
</div>
