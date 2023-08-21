<script>
import { mapStores } from 'pinia'
import { useRalseiStore } from '../stores/RalseiStore';

export default {
    data() {
        return {
            baseUrl: 'https://pbs.twimg.com/media/',
            images: [
                'FyB22v3WYAAT2x3',
                'Fxyj0ojXsAAFX7C',
                'FwBrW6YaYAE24dY',
                'FwBJ2t1aQAACH7R',
                'Fx3yFc1aEAEvP3Y',
                'Fxi_XjBWwAAgqHB',
                'FvxzFKHaMAEOW-4',
                'FvX-a-KaEAEcIHT',
                'Fu-O-USacAMFd9z',
                'FuxzfLyagAAzZvi',
                'FuuxxyZaEAM7cSj',
                'FupV3F2XoAIlWg1'
            ],
        }
    },
    computed: {
        ...mapStores(useRalseiStore)
    },
    methods: {
        handleScroll() {
            let st = this.$refs.gallery.scrollTop
            if (st > 20) {
                this.ralStore.setScrolled(true)
            } else {
                this.ralStore.setScrolled(false)
            }
        }
    },
    mounted() {
        this.$refs.gallery.addEventListener('scroll', this.handleScroll)
        this.handleScroll()
    },
    beforeUnmount() {
        this.$refs.gallery.removeEventListener('scroll', this.handleScroll)
    },
}

</script>


<template>
    <div class="gallery" ref="gallery">
        <div class="wrapper">
            <div class="images">
                <img v-for="image in images" :key="image" :src="baseUrl + image + '?format=webp'" alt="ralse">
            </div>
        </div>
    </div>
</template>