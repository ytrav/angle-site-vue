// import the vue app
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import the app root and the router, to handle different pages - routes
import App from './App.vue'
import router from './router'

// import styles, sass styles to be exact
import './styles/style.scss'
import './styles/variables.scss'
import './styles/header.scss'
import './styles/gallery.scss'
import './styles/commissions.scss'
import './styles/viewports.scss'

// define the vue app
const app = createApp(App)

// attach the plugins to the app
app.use(createPinia())
app.use(router)

app.mount('#app')
