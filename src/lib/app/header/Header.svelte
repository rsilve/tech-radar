<script>
	import { link, useFocus } from 'svelte-navigator';
	import PlusIcon from '../components/icons/PlusIcon.svelte';
	import QuestionIcon from '../components/icons/QuestionIcon.svelte';
	import Search from './Search.svelte';
	import Home from '../components/Home.svelte';

	const registerFocus = useFocus();
</script>

<div class="navbar mb-4 w-full bg-base-100 p-3 drop-shadow-md print:hidden">
	<Home />
	<div class="mr-8  flex-1 justify-end">
		<Search />
	</div>
	<div class="flex-none leading-tight">
		<a href="/edit" use:link tabindex="-1">
			Add a blip<br />on the radar
		</a>
	</div>
	<div class="flex-none pl-2">
		<a href="/edit" use:link use:registerFocus class="btn-primary btn-circle btn text-2xl">
			<PlusIcon alt="Edit - Ctrl-b" />
		</a>
	</div>

	<a href="/help" use:link class="btn-ghost btn-circle btn ml-4 text-4xl">
		<QuestionIcon alt="What are the rings and the quadrants" />
	</a>
</div>
