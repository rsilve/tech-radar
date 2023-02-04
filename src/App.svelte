<script lang="ts">
    import Radar from "./lib/radar/Radar.svelte";
    import Help from "./lib/Help.svelte";
    import Layout from "./lib/Layout.svelte";
    import Header from "./lib/header/Header.svelte";
    import Search from "./lib/Search.svelte";
    import ItemEditor from "./lib/header/ItemEditor.svelte";
    import Modal from "./lib/components/Modal.svelte";
    import {Route, Router} from "svelte-navigator";

    let isHelpOpen = false
    let isEditOpen = false

    function toggleHelp(): void {
        isHelpOpen = !isHelpOpen;
    }

    function toggleEdit(): void {
        isEditOpen = !isEditOpen;
    }
</script>

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