// import router modules
import { createRouter, createWebHistory } from 'vue-router'

// import all the components - the routes
import RalseiHome from '../views/RalseiHome.vue'
import RalseiAbout from '../views/RalseiAbout.vue'
import RalseiGallery from '../views/RalseiGallery.vue'
import RalseiLinks from '../views/RalseiLinks.vue'

// define router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RalseiHome
    },
    {
      path: '/about',
      name: 'about',
      component: RalseiAbout
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: RalseiGallery
    },
    {
      path: '/links',
      name: 'links',
      component: RalseiLinks
    },
  ]
})

export default router
