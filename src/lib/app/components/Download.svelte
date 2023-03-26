<script lang="ts">
	import { writeArchive, type Archive } from '../../model';
	import DownloadIcon from './icons/DownloadIcon.svelte';

	export let archive: Archive;
	export let onComplete: () => void = () => {
		/* do nothing */
	};

	let link: HTMLAnchorElement;

	function download() {
		let str = writeArchive(archive);
		const file = new File([str], 'tech-radar.json', {
			type: 'application/json'
		});
		const url = URL.createObjectURL(file);
		link.href = url;
		link.download = file.name;
		link.click();
		URL.revokeObjectURL(url);
		onComplete();
	}
</script>

<div class="cursor-pointer whitespace-nowrap pt-2 pb-2" on:click={download} on:keydown={download}>
	<DownloadIcon />
	Download
</div>
<a bind:this={link} href={'#'} class="hidden">x</a>
