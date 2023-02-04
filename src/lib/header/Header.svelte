<script>
    import Menu from "./Menu.svelte";
    import {link, useFocus} from "svelte-navigator";
    import PlusIcon from "../components/icons/PlusIcon.svelte";
    import QuestionIcon from "../components/icons/QuestionIcon.svelte";

    const registerFocus = useFocus();
</script>

<div class="w-full print:hidden mt-4">
    <div class="flex items-center pr-4 pl-4 ">
        <Menu/>
        <div class="flex-grow ml-4">
            <h1 class="text-4xl font-bold">Tech Radar</h1>
            <small class="block h-2 leading-none">A map for your team's technologies</small>
        </div>
        <div>
            <a href="/edit" use:link>
                Add a new technology
            </a>
        </div>
        <div class="pl-2">
            <a href="/edit" use:link use:registerFocus class="btn btn-circle text-2xl">
                <PlusIcon alt="Ctrl-Alt-n"/>
            </a>
        </div>

        <a href="/help" use:link class="btn btn-circle btn-ghost text-4xl ml-4">
            <QuestionIcon alt="What are the rings and the quadrants"></QuestionIcon>
        </a>
    </div>
</div>