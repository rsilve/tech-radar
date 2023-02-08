<script lang="ts">
    import Radar from "./lib/app/radar/Radar.svelte";
    import Help from "./lib/Help.svelte";
    import Layout from "./lib/Layout.svelte";
    import Header from "./lib/app/header/Header.svelte";
    import Search from "./lib/Search.svelte";
    import ItemEditor from "./lib/app/header/ItemEditor.svelte";
    import Modal from "./lib/app/components/Modal.svelte";
    import { navigate, Route, Router } from "svelte-navigator";

    function handleKeydown(event: KeyboardEvent) {
        if (event.altKey && event.ctrlKey && event.key === "n") {
            event.preventDefault();
            navigate("/edit");
        }
        if (event.altKey && event.ctrlKey && event.key === "/") {
            console.log("Search");
        }
    }

    function idToInt(id: string): number {
        let res = parseInt(id, 10);
        return isNaN(res) ? undefined : res;
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<main class="relative">
    <Router>
        <Route path="/*">
            <Layout>
                <Header slot="header" />
                <Radar slot="radar" />
                <Search slot="search" />
            </Layout>
            <Route path="/help">
                <Modal>
                    <Help />
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
</main>
