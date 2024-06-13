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
        },
        replaceRel(state, payload) {
            state.gifts.find(item => item.id === payload.id).relativity = payload
        }
    },
    actions: {
        async getGiftsByCategory(context, payload) {
            await axios.get(
                Configure.baseUrl + '/gifts?category=' + payload.category ,
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

        async getAllGifts(context) {
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

        async approve(context, payload) {
            console.log(payload)
            await axios.put(
                Configure.baseUrl + '/gifts/relativity/approve?id=' + payload.id,
                JSON.stringify(payload.data),
                {
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                }
            ).then(response => {
                console.log(response)
                context.commit('replaceRel', response.data);
            }).catch(ex => {
                console.log(ex)
            })
        },

        async disapprove(context, payload) {
            await axios.put(
                Configure.baseUrl + '/gifts/relativity/disapprove?id=' + payload.id,
                JSON.stringify(payload.data),
                {
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                }
            ).then(response => {
                console.log(response)
                context.commit('replaceRel', response.data);
            }).catch(ex => {
                console.log(ex)
            })
        }
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