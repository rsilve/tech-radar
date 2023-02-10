<script>
    import Menu from './Menu.svelte'
    import { link, useFocus } from 'svelte-navigator'
    import PlusIcon from '../components/icons/PlusIcon.svelte'
    import QuestionIcon from '../components/icons/QuestionIcon.svelte'
    import Search from './Search.svelte'

    const registerFocus = useFocus()
</script>

<div class="mt-4 w-full print:hidden">
    <div class="flex items-center pr-4 pl-4 ">
        <Menu />
        <div class="ml-4">
            <h1 class="text-4xl font-bold">Tech Radar</h1>
            <small class="block h-2 leading-none"
                >A map for your team's technologies</small
            >
        </div>
        <div class="mr-8 flex flex-grow justify-end">
            <Search />
        </div>
        <div class="leading-tight">
            <a href="/edit" use:link tabindex="-1">
                Add a blip<br />on the radar
            </a>
        </div>
        <div class="pl-2">
            <a
                href="/edit"
                use:link
                use:registerFocus
                class="btn-circle btn text-2xl"
            >
                <PlusIcon alt="Ctrl-Alt-n" />
            </a>
        </div>

        <a href="/help" use:link class="btn-ghost btn-circle btn ml-4 text-4xl">
            <QuestionIcon alt="What are the rings and the quadrants" />
        </a>
    </div>
</div>
