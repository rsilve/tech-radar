<script lang="ts">
	import { readRadar } from '../../model';
	import UploadIcon from './icons/UploadIcon.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let onComplete: () => void = () => {
		/* do nothing */
	};

	let files: FileList = undefined;
	let input: HTMLInputElement;

	function upload() {
		input.click();
	}

	async function loadFromFile(fileList?: FileList) {
		if (fileList) {
			// Note that `fileList` is of type `FileList`, not an Array:
			// https://developer.mozilla.org/en-US/docs/Web/API/FileList
			for (const file of fileList) {
				const text = await file.text();
				const radar = readRadar(text);
				if (radar) {
					dispatch('loadRadar', { radar });
				}
				break;
			}
		}
		// reset input element
		if (input) {
			input.type = '';
			input.type = 'file';
		}
		onComplete();
	}

	$: loadFromFile(files);
</script>

<div class="cursor-pointer whitespace-nowrap pt-2 pb-2" on:click={upload} on:keydown={upload}>
	<UploadIcon />
	Upload
	<input type="file" class="hidden" bind:this={input} bind:files accept="application/json" />
</div>
