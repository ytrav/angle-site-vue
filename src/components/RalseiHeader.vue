<script>
import { mapStores } from 'pinia'
import { useRalseiStore } from '../stores/RalseiStore';

export default {
    data() {
        return {
            links: [
                {
                    name: "Gallery",
                    path: "/gallery"
                },
                {
                    name: "About",
                    path: "/about"
                },
                {
                    name: "Links",
                    path: "/links"
                },
                {
                    name: "Commissions",
                    path: "/commissions"
                },
            ]
        }
    },
    computed: {
        ...mapStores(useRalseiStore)
    }

}

</script>

<template>
    <header :class="{ scrolled: ralStore.scrolled }">
        <RouterLink to="/" class="logo">
            <img src="../assets/hat-logo.png" alt="Ralsei hat">
            <h2>DailyRalsei</h2>
        </RouterLink>
        <RouterLink v-for="link in links" :key="link" :to="link.path">{{ link.name }}</RouterLink>
    </header>
</template>