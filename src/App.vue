<script>
import { RouterView } from 'vue-router'
import RalseiHeader from './components/RalseiHeader.vue'

export default {
  data() {
    return {}
  },
  components: {
    RouterView,
    RalseiHeader,
    // RouterLink
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
</template>
