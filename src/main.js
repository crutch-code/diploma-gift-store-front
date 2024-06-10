import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/StoreWrapper'
import router from "@/router/router";
import {Axios} from "axios";

console.log(Axios.defaults)



let app= createApp(App)

app.directive('out-click', {
    mounted(el,binding){
        el.setAttribute('tabindex',0)
        el.addEventListener('focusout',({currentTarget, relatedTarget})=>{
            if (currentTarget.contains(relatedTarget)) return;
            if (typeof binding.value === 'function'){
                binding.value()
            }
        })
    }
})

app.use(router).use(store).mount('#app')


