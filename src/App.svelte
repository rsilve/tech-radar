<script lang="ts">
    import Radar from "./lib/radar/Radar.svelte";
    import Help from "./lib/Help.svelte";
    import Layout from "./lib/Layout.svelte";
    import Header from "./lib/header/Header.svelte";
    import Search from "./lib/Search.svelte";
    import ItemEditor from "./lib/header/ItemEditor.svelte";
    import Modal from "./lib/components/Modal.svelte";
    import {navigate, Route, Router} from "svelte-navigator";

    function handleKeydown(event: KeyboardEvent) {
        if (event.altKey && event.ctrlKey && event.key === "n") {
            event.preventDefault()
            navigate("/edit")
        }
        if (event.altKey && event.ctrlKey && event.key === "/") {
            console.log("Search")
        }
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

<main class="relative">
    <Router>
        <Route path="/*">
            <Layout>
                <Header slot="header"></Header>
                <Radar slot="radar"></Radar>
                <Search slot="search"/>
            </Layout>
            <Route path="/help">
                <Modal>
                    <Help></Help>
                </Modal>
            </Route>
            <Route path="/edit/*">
                <Route path="/">
                    <Modal>
                        <ItemEditor></ItemEditor>
                    </Modal>
                </Route>
                <Route path=":id" let:params>
                    <Modal>
                        <ItemEditor id={params.id}></ItemEditor>
                    </Modal>
                </Route>
            </Route>
        </Route>
    </Router>

</main>