<script lang="ts">
	import type { Writable } from 'svelte/store';
	import type { Radar } from '../../model';
	import EditIcon from '../components/icons/EditIcon.svelte';

	export let archive: Writable<Radar>;

	let editor: HTMLDivElement & HTMLInputElement;

	function handleNameEdit() {
		archive.update((a) => ({ ...a, name: editor.innerText.trim() }));
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			archive.update((a) => ({ ...a, name: editor.innerText.trim() }));
			editor.blur();
		}
	}

	function handleClick() {
		editor.focus();
	}

	function handleFocus() {
		if (window.getSelection) {
			const selection = window.getSelection();
			const range = document.createRange();
			range.selectNodeContents(editor);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}
</script>

<div class="group flex items-center ">
	<span
		class="flex-grow pl-1"
		contenteditable
		on:focus={handleFocus}
		on:blur={handleNameEdit}
		on:keydown={handleKeydown}
		bind:this={editor}>{$archive.name}</span
	>
	<span class="hidden group-hover:block" on:click={handleClick}><EditIcon /></span>
</div>
