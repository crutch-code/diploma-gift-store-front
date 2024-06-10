import axios from "axios";
import Configure from "../../api/Configure";

export default {
    namespaced: true,
    state() {
        return {
            user: {
                id: undefined,
                username: undefined,
                email: undefined,
                jwt: undefined
            }
        }
    },
    getters: {
        authenticated: (state) => {
            return state.user
        }

    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        userLogout(state) {
            state.user = {
                id: undefined,
                username: undefined,
                email: undefined,
                jwt: undefined
            }
        }
    },
    actions: {
        async auth(context, payload) {
            await axios.post(
                Configure.baseUrl + '/login',
                JSON.stringify(payload),
                {
                    headers:{
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                }
            ).then(response => {
                console.log(response)
                context.commit('setUser', response.data);
            }).catch(ex =>{
                console.log(ex)
            })
        },
        async register(context, payload) {
            await axios.post(
                Configure.baseUrl + '/register',
                JSON.stringify(payload),
                {
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                }
            ).then(response => {
                console.log(response)
                context.commit('setUser', response.data);
            }).catch(ex=> {console.log(ex)})
        },
        logout(context, payload) {
            console.log('/user/logout dispatch')
            context.commit("userLogout")
            payload()
        }
    }
}
