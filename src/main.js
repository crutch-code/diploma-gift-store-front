import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/StoreWrapper'

createApp(App).use(store).mount('#app')
