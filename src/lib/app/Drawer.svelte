<script lang="ts">
	import Download from './components/Download.svelte';
	import Upload from './components/Upload.svelte';
	import Home from './components/Home.svelte';
	import SettingsMenuItem from './settings/SettingsMenuItem.svelte';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from './GlobalContext';
	import Reset from './components/Reset.svelte';
	import ShareMenuItem from './drawer/ShareMenuItem.svelte';
	import HistoryMenu from './drawer/HistoryMenu.svelte';

	const { radar, items, loadRadar, reset, history } = getContext(GLOBAL_CONTEXT);
	export let id = 'app-drawer';

	let closeElement: HTMLInputElement;

	function close() {
		closeElement?.click();
	}

	function onReset() {
		reset();
		close();
	}

	function handleLoadRadar(event) {
		loadRadar(event.detail.radar);
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
					<Upload on:loadRadar={handleLoadRadar} onComplete={close} />
				</li>
				<li>
					<ShareMenuItem />
				</li>
				<li>
					<Reset reset={onReset} />
				</li>
			</ul>
			<HistoryMenu {radar} {history} on:loadRadar={handleLoadRadar} />
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
