import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js' // Hacemos la ruta explícita al archivo index.js

const app = createApp(App)

app.use(router)
app.mount('#app')
