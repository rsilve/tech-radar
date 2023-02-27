<script>
	import { navigate, useFocus } from 'svelte-navigator';
	import ModalFooter from './components/ModalFooter.svelte';

	const registerFocus = useFocus();
</script>

<div>
	<div class="columns-2">
		<h1 class="mb-0.5 mt-2 text-xl font-bold">What are the quadrants ?</h1>

		<h2 class="mb-0.5 mt-2 font-bold">Tools</h2>
		Things we use to build our products, like git or IDE.
		<h2 class="mb-0.5 mt-2 font-bold">Platforms & data</h2>
		Things that we build software on top of such as mobile technologies like Android, virtual platforms
		like the JVM. Also databases used to manage data used in our products.
		<h2 class="mb-0.5 mt-2 font-bold">Programming Languages and Frameworks</h2>
		Really need a comment ?
		<h2 class="mb-0.5 mt-2 font-bold">Techniques</h2>
		These include elements of a software development process, such as experience design; and ways of
		structuring software, such as microservices.
		<div class="break-after-column" />

		<h1 class="mb-0.5 mt-2 text-xl font-bold">What are the rings ?</h1>
		<h2 class="mb-0.5 mt-2 font-bold">Adopt</h2>
		<p>
			The Adopt ring represents blips on which we have a good control. We use them as needed in our
			projects.
		</p>
		<h2 class="mb-0.5 mt-2 font-bold">Trial</h2>
		<p>
			The Trial ring represents blips that we sometimes use, but that we need to train on in order
			to master them.
		</p>
		<h2 class="mb-0.5 mt-2 font-bold">Assess</h2>
		<p>
			The Assess ring represents blips that we would like to integrate to our stack. But first we
			need to train and understand the impact on our ecosystem.
		</p>
		<h2 class="mb-0.5 mt-2 font-bold">Hold</h2>
		<p>
			The Hold ring represents blips that we have identified but for which no integration action is
			envisaged.
		</p>
	</div>
	<ModalFooter>
		<button class="btn-outline btn" on:click={() => navigate('/')} use:registerFocus>Close</button>
	</ModalFooter>
</div>
