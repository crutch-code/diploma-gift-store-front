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
        authenticated:(state) => {
            return state.user
        }

    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        auth(context)  { //todo: mock
            context.commit("setUser", {
                id: 1,
                username: 'test user',
                email: 'test@test.com',
                password: 'test',
                jwt: 'test',
            })
        },
        register(context, payload) {

        }
    }
}
