<script lang="ts">

    import {items} from "../stores";

    export let onComplete: () => void = () => {}

    let link: HTMLAnchorElement

    function download() {

        let str = JSON.stringify($items);
        const file = new File([str], 'tech-radar.json', {
            type: 'application/json',
        })
        const url = URL.createObjectURL(file)
        link.href = url
        link.download = file.name
        link.click()
        URL.revokeObjectURL(url)
        onComplete()
    }
</script>

<div class="whitespace-nowrap cursor-pointer pt-2 pb-2" on:click={download} on:keydown={download} >
    <u>↓</u>
    Download
</div>
<a bind:this={link} href={'#'} class="hidden">x</a>
