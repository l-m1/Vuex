export default {
    state:{
        name: 'hellokitty'
    },
    getters: {
        fullname(state) {
            return state.name + '111'
        },
        fullname1(state,getters) {
            return getters.fullname +'222'
        },
        fullname3(state,getters,rootState) {
            return getters.fullname1 + rootState.counter
        }
    },
    mutations: {
        updateName(state,payload) {
            state.name = payload
        }
    },
    actions:{
        aUpdateName(context) {
            setTimeout(() =>{
                context.commit('updateName','wangshuo')
            },1000) 
        }
    }
}
