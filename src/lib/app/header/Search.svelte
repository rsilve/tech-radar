<script lang="ts">
    import { searchCriteria } from '../../stores'

    let searchInput: HTMLInputElement
    function handleKeydown(event: KeyboardEvent) {
        let key = event.key

        if (key === '/' && searchInput) {
            searchInput.focus()
        }
    }
</script>

<svelte:window on:keydown="{handleKeydown}" />

<div class="form-control">
    <label class="input-group">
        <input
            type="text"
            bind:this="{searchInput}"
            bind:value="{$searchCriteria}"
            placeholder="Search ..."
            class="input input-bordered w-full"
        />
        <span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
        </span>
    </label>
</div>
