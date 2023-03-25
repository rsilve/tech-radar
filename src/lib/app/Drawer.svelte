<script lang="ts">
	import Download from './components/Download.svelte';
	import Upload from './components/Upload.svelte';
	import Home from './components/Home.svelte';
	import SettingsMenuItem from './settings/SettingsMenuItem.svelte';
	import { getContext } from 'svelte';

	const { archive, items } = getContext('global-context');
	export let id = 'app-drawer';

	let closeElement: HTMLInputElement;

	function close() {
		closeElement?.click();
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
					<Upload onLoad={(list) => items.set(list)} onComplete={close} />
				</li>
			</ul>
			<ul class="menu bg-base-100 pb-8 text-base-content">
				<li><SettingsMenuItem on:click={close} /></li>
			</ul>
		</div>
	</div>
</div>
