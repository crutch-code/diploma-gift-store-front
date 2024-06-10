import Index from "@/pages/Index.vue";
import Auth from "@/pages/Auth.vue";
import {createRouter, createWebHistory} from "vue-router";
import Register from "@/pages/Register.vue";

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/collections',
        component: Index
    },
    {
        path: '/collections/:uuid/gifts',
        component: Index
    },
    {
        path: '/collections/add',
        component: Index
    },
    {
        path: '/auth',
        component: Auth
    },
    {
        path: '/register',
        component: Register
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
});