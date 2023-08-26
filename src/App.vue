<script>
import { RouterView } from 'vue-router'
import RalseiHeader from './components/RalseiHeader.vue'
import RalseiMenu from './components/RalseiMenu.vue'
import { mapStores } from 'pinia'
import { useRalseiStore } from './stores/RalseiStore'



export default {
  data() {
    return {}
  },
  computed: {
    ...mapStores(useRalseiStore)
  },
  components: {
    RouterView,
    RalseiHeader,
    RalseiMenu,
    // RouterLink
  },
  mounted() {

    window.addEventListener('resize', this.viewportHandler)
  },
  unmounted() {
    window.removeEventListener('resize', this.viewportHandler)
  },
  methods: {
    viewportHandler() {
      console.log('resized');
      if (window.innerWidth >= 768 && this.ralStore.menuOpened) {
        console.log('closing');
        this.ralStore.setMenu(false)
      }
    },
  }
}
</script>

<template>
  <RalseiHeader />
  <!-- <Transition name="page" mode="out-in">
    <RouterView />
  </Transition> -->
  <RouterView class="page" v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <Component :is="Component" />
    </Transition>
  </RouterView>
  <Transition name="hamburger">
    <RalseiMenu v-if="ralStore.menuOpened" />
  </Transition>
  <Transition name="background">
    <div @click="ralStore.toggleMenu" v-if="ralStore.menuOpened" class="popup-background"></div>
  </Transition>
</template>
