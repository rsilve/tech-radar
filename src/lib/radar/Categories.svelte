<script lang="ts">
    import {categories} from "../constants.js";
    import QuestionIcon from "../components/icons/QuestionIcon.svelte";
</script>

<div class="absolute top-0 right-0 tooltip tooltip-left"
     data-tip="Things we use to build our products, like git or IDE.">
    <div class="opacity-50 whitespace-pre text-right">
        {categories["1"]}
        <QuestionIcon></QuestionIcon>
    </div>
</div>
<div class="absolute top-0 left-0 tooltip tooltip-right"
     data-tip="Things that we build software on top of such as mobile technologies like Android, virtual platforms like the
        JVM.
        Also databases used to manage data used in our products.">
    <div class="opacity-50 whitespace-pre">
        {categories["2"]}
        <QuestionIcon></QuestionIcon>
    </div>
</div>
<div class="absolute bottom-0 left-0 whitespace-pre tooltip tooltip-right"
     data-tip="Really need a comment ?">
    <div class="opacity-50 whitespace-pre">
        {categories["3"]}
        <QuestionIcon></QuestionIcon>
    </div>

</div>
<div class="absolute bottom-0 right-0 tooltip tooltip-left"
     data-tip="These include elements of a software development process, such as experience design; and ways of structuring
        software, such as microservices.">
    <div class="opacity-50 whitespace-pre text-right">
        {categories["4"]}
        <QuestionIcon></QuestionIcon>
    </div>
</div>
