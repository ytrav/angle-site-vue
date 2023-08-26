<script>
import { mapStores } from 'pinia';
import { useRalseiStore } from '../stores/RalseiStore';

export default {
    computed: {
        ...mapStores(useRalseiStore)
    }
}
</script>

<template>
    <div class="menu">
        <RouterLink v-for="link in ralStore.links" :to="link.path" :key="link">
            <span>{{ link.name }}
            </span>
        </RouterLink>
    </div>
</template>