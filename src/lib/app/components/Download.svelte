<script lang="ts">
	import { type Radar, writeRadar } from '../../model';
	import DownloadIcon from './icons/DownloadIcon.svelte';

	export let radar: Radar;
	export let onComplete: () => void = () => {
		/* do nothing */
	};

	let link: HTMLAnchorElement;

	function download() {
		let str = writeRadar(radar);
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
<a bind:this={link} class="hidden">x</a>
