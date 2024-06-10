import {createStore} from "vuex";
import user from "@/store/UserStore";
import collections from "@/store/CollectionsStore"

export const store = createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        user,
        collections
    },
    devtools: true
})