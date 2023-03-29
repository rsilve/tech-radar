<script lang="ts">
	import Download from './components/Download.svelte';
	import Upload from './components/Upload.svelte';
	import Home from './components/Home.svelte';
	import SettingsMenuItem from './settings/SettingsMenuItem.svelte';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from './GlobalContext';
	import Reset from './components/Reset.svelte';
	import ShareMenuItem from './drawer/ShareMenuItem.svelte';
	import EditableLabel from './drawer/EditableLabel.svelte';

	const { radar, items, loadFromStorage, reset } = getContext(GLOBAL_CONTEXT);
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
			<ul class="menu bg-base-100 text-base-content">
				<li>
					<Home {id} />
				</li>
				<li>
					<Download radar={$radar} onComplete={close} />
				</li>
				<li>
					<Upload onLoad={(radar) => loadFromStorage(radar)} onComplete={close} />
				</li>
				<li>
					<ShareMenuItem />
				</li>
				<li>
					<Reset reset={onReset} />
				</li>
			</ul>
			<div class="flex flex-grow flex-col bg-base-100 bg-base-100 pl-4 pr-5 text-base-content">
				<div class="divider mt-0" />
				<div class="pl-1 text-sm font-bold uppercase text-accent">Current</div>
				<div><EditableLabel {radar} /></div>
				<div class="flex-grow" />
				<div class="divider mb-0" />
			</div>
			<ul class="menu bg-base-100 pb-8 text-base-content">
				<li>
					<SettingsMenuItem on:click={close} />
				</li>
				<li>
					<a href="https://github.com/rsilve/tech-radar.git" target="_blank" tabindex="-1">Github</a
					>
				</li>
			</ul>
		</div>
	</div>
</div>
