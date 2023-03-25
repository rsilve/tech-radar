<script lang="ts">
	import Radar from './lib/app/radar/Radar.svelte';
	import Help from './lib/app/Help.svelte';
	import Layout from './lib/app/Layout.svelte';
	import Header from './lib/app/header/Header.svelte';
	import ItemEditor from './lib/app/header/ItemEditor.svelte';
	import Modal from './lib/app/components/Modal.svelte';
	import { navigate, Route, Router } from 'svelte-navigator';
	import Summary from './lib/app/Summary.svelte';
	import Settings from './lib/app/settings/Settings.svelte';
	import GlobalLoader from './lib/app/GlobalLoader.svelte';

	function handleKeydown(event: KeyboardEvent) {
		if (event.ctrlKey && event.key === 'b') {
			event.preventDefault();
			navigate('/edit');
		}
	}

	function idToInt(id: string): number {
		let res = parseInt(id, 10);
		return isNaN(res) ? undefined : res;
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<main class="relative">
	<GlobalLoader>
		<Router>
			<Route path="/*">
				<Layout>
					<Header slot="header" />
					<Radar slot="radar" />
					<Summary slot="search" />
				</Layout>
				<Route path="/help">
					<Modal>
						<Help />
					</Modal>
				</Route>
				<Route path="/settings">
					<Modal>
						<Settings />
					</Modal>
				</Route>
				<Route path="/edit/*">
					<Route path="/">
						<Modal>
							<ItemEditor />
						</Modal>
					</Route>
					<Route path=":id" let:params>
						<Modal>
							<ItemEditor id={idToInt(params.id)} />
						</Modal>
					</Route>
				</Route>
			</Route>
		</Router>
	</GlobalLoader>
</main>
