<script>
import { mapStores } from 'pinia'
import { useRalseiStore } from '../stores/RalseiStore';

export default {
    data() {
        return {}
    },
    computed: {
        ...mapStores(useRalseiStore)
    },
    methods: {
        handleScroll() {
            let st = this.$refs.commissions.scrollTop
            if (st > 20) {
                this.ralStore.setScrolled(true)
            } else {
                this.ralStore.setScrolled(false)
            }
        }
    },
    mounted() {
        this.$refs.commissions.addEventListener('scroll', this.handleScroll)
        this.handleScroll()
    },
    beforeUnmount() {
        this.$refs.commissions.removeEventListener('scroll', this.handleScroll)
    },
}

</script>


<template>
    <div class="commissions" ref="commissions">
        <div class="wrapper">
            <div class="heading">
                <h1>Commissions</h1>
            </div>
            <div class="comm-container">
                <div class="comm-page p1">
                    <h2>Choose the art style</h2>
                    <div class="options">
                        <div class="option-container" v-for="(n, index) in 2" :key="index">
                            <div v-if="index === 0" class="checkmark"></div>
                            <img class="option " src="https://pbs.twimg.com/media/FyB22v3WYAAT2x3?format=webp"
                                alt="ralsei">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>