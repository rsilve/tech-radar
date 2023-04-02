<script lang="ts">
	import Download from '../components/Download.svelte';
	import Upload from '../components/Upload.svelte';
	import Home from '../components/Home.svelte';
	import SettingsMenuItem from '../settings/SettingsMenuItem.svelte';
	import { getContext } from 'svelte';
	import { GLOBAL_CONTEXT } from '../GlobalContext';
	import Reset from '../components/Reset.svelte';
	import ShareMenuItem from './ShareMenuItem.svelte';
	import HistoryMenu from './HistoryMenu.svelte';
	import type { AppContext } from '../../stores';

	const { radar, items, loadRadar, reset, history } = getContext<AppContext>(GLOBAL_CONTEXT);
	export let id = 'app-drawer';

	let closeElement: HTMLInputElement;

	function close() {
		closeElement?.click();
	}

	function handleLoadRadar(event) {
		loadRadar(event.detail.radar);
		close();
	}

	function onReset() {
		reset();
		close();
	}

	function handleCopyRadar(event) {
		reset(event.detail.radar);
	}
</script>

<div class="drawer">
	<input bind:this={closeElement} class="drawer-toggle" {id} type="checkbox" />
	<div class="drawer-content">
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side max-h-screen">
		<label class="drawer-overlay" for={id} />
		<div class="flex max-h-screen w-96 flex-col">
			<ul class="menu bg-base-100 text-base-content">
				<li>
					<Home {id} />
				</li>
				<li>
					<Download onComplete={close} radar={$radar} />
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
			<HistoryMenu {history} on:copyRadar={handleCopyRadar} on:loadRadar={handleLoadRadar} />
			<ul class="menu bg-base-100 pb-8 text-base-content">
				<li>
					<SettingsMenuItem on:click={close} />
				</li>
				<li>
					<a href="https://github.com/rsilve/tech-radar" tabindex="-1" target="_blank">Github</a>
				</li>
			</ul>
		</div>
	</div>
</div>
