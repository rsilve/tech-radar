<script lang="ts">
	import Download from './components/Download.svelte';
	import Upload from './components/Upload.svelte';
	import Home from './components/Home.svelte';
	import SettingsMenuItem from './settings/SettingsMenuItem.svelte';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from './GlobalContext';
	import Reset from './components/Reset.svelte';
	import ShareIcon from './components/icons/ShareIcon.svelte';
	import ShareMenuItem from './drawer/ShareMenuItem.svelte';

	const { archive, items, loadFromStorage, reset } = getContext(GLOBAL_CONTEXT);
	export let id = 'app-drawer';

	let closeElement: HTMLInputElement;

	function close() {
		closeElement?.click();
	}

	function onReset() {
		reset();
		close();
	}
</script>

<div class="drawer">
	<input {id} bind:this={closeElement} type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for={id} class="drawer-overlay" />
		<div class="flex w-96 flex-col ">
			<ul class="menu flex-grow bg-base-100 text-base-content">
				<li><Home {id} /></li>
				<li><Download archive={$archive} onComplete={close} /></li>
				<li>
					<Upload onLoad={(archive) => loadFromStorage(archive)} onComplete={close} />
				</li>
				<li>
					<ShareMenuItem />
				</li>
				<li>
					<Reset reset={onReset} />
				</li>
			</ul>
			<ul class="menu bg-base-100 pb-8 text-base-content">
				<li><SettingsMenuItem on:click={close} /></li>
			</ul>
		</div>
	</div>
</div>
