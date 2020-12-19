import Vue from 'vue'
import Vuex from 'vuex'


import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import moduleA from './modules/moduleA.js'


Vue.use(Vuex)


const state = {
    counter: 100,
    students: [
        {id:110,name:'lisa',age:19},
        {id:111,name:'rose',age:34},
        {id:112,name:'jenne',age:8},
        {id:113,name:'why',age:21}
    ],
    info: {
        name: 'zhangsna',
        age: 66,
        height: 1.88
    }
}
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        a: moduleA
    }
})

export default store