import axios from "axios";
import Configure from "../../api/Configure";

export default {
    namespaced: true,
    state() {
        return {
            gifts: []
        }
    },
    getters: {
        gifts: (state) => {
            return state.gifts
        },

    },
    mutations: {
        setGifts(state, payload) {
            state.gifts = payload
        }
    },
    actions: {
        async getAllGifts(context, payload) {
            await axios.get(
                Configure.baseUrl + '/gifts',
                {
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                }
            ).then(response => {
                console.log(response)
                context.commit('setGifts', response.data === undefined? [] : response.data);
            }).catch(ex => {
                console.log(ex)
            })
        },

        // async addCollection(context, payload) {
        //     await axios.put(
        //         Configure.baseUrl + '/collections?uid=' + payload.uid,
        //         JSON.stringify(payload.body),
        //         {
        //             headers: {
        //                 'Content-Type': 'application/json; charset=UTF-8'
        //             }
        //         }
        //     ).then(response => {
        //         console.log(response)
        //         context.commit('addCollection', response.data);
        //     }).catch(ex => {
        //         console.log(ex)
        //     })
        // },
        //
        // async deleteCollection(context, payload) {
        //     await axios.delete(
        //         Configure.baseUrl + '/collections?uid=' + payload.uid + '&collectionId=' + payload.collectionId,
        //         {
        //             headers: {
        //                 'Content-Type': 'application/json; charset=UTF-8'
        //             }
        //         }
        //     ).then(response => {
        //         console.log(response)
        //         context.commit('removeCollection', payload.collectionId);
        //     }).catch(ex => {
        //         console.log(ex)
        //     })
        // },
        // findById(state, payload) {
        //     if (payload.id === undefined) {
        //         return {
        //             id: undefined,
        //             restriction: undefined,
        //             age: undefined,
        //             gender: undefined,
        //             category: undefined
        //         }
        //     }
        //     return state.collections.find(it => it.id === payload.id)
        // }
    }
}