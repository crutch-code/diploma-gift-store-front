import {createStore} from "vuex";
import user from "@/store/UserStore";
import collections from "@/store/CollectionsStore"
import gifts from "@/store/GiftStore"

export const store = createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        user,
        collections,
        gifts
    },
    devtools: true
})