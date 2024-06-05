import Index from "@/pages/Index.vue";
import Auth from "@/pages/Auth.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/auth',
        component: Auth
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
});