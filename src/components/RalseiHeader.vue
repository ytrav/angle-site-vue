<script>
import { mapStores } from 'pinia'
import { useRalseiStore } from '../stores/RalseiStore';

export default {
    data() {
        return {
            
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
        <RouterLink v-for="link in ralStore.links" :key="link" :to="link.path">{{ link.name }}</RouterLink>
        <div @click="ralStore.toggleMenu" class="hamburger">
            <mdicon name="menu" size="30" />
        </div>
    </header>
</template>