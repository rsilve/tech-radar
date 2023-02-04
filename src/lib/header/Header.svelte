<script>
    import Menu from "./Menu.svelte";
    import {link, useFocus} from "svelte-navigator";
    import PlusIcon from "../components/icons/PlusIcon.svelte";
    import QuestionIcon from "../components/icons/QuestionIcon.svelte";

    const registerFocus = useFocus();
</script>

<div class="w-full print:hidden mt-4">
    <div class="flex gap-4 items-center pr-4 pl-4">
        <Menu/>
        <div class="flex-grow">
        </div>
        <a href="/edit" use:link use:registerFocus class="btn btn-circle text-2xl">
            <PlusIcon alt="Add a new technology"/>
        </a>
        <a href="/help" use:link class="btn btn-circle btn-ghost text-4xl">
            <QuestionIcon alt="What are the rings and the quadrants"></QuestionIcon>
        </a>
    </div>
</div>