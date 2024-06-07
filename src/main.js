import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/StoreWrapper'
import router from "@/router/router";

let app =createApp(App).use(router).use(store).mount('#app')
