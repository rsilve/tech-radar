<script lang="ts">
	import type { Writable } from 'svelte/store';
	import type { Radar } from '../../model';
	import EditIcon from '../components/icons/EditIcon.svelte';

	export let radar: Writable<Radar>;

	let editor: HTMLDivElement & HTMLInputElement;

	function handleNameEdit() {
		radar.update((a) => ({ ...a, name: editor.innerText.trim() }));
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			radar.update((a) => ({ ...a, name: editor.innerText.trim() }));
			editor.blur();
		}
		if (event.key === 'Escape') {
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

<div class="group flex items-center pl-4 pr-5">
	<span
		bind:this={editor}
		class="flex-grow pl-1"
		contenteditable
		on:blur={handleNameEdit}
		on:focus={handleFocus}
		on:keydown={handleKeydown}>{$radar.name}</span
	>
	<span class="hidden group-hover:block" on:click={handleClick}><EditIcon /></span>
</div>
