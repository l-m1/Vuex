import Vue from 'vue'
import Vuex from 'vuex'


import {INCREMENT} from './simple.js'

Vue.use(Vuex)

const moduleA = {
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
const store = new Vuex.Store({
    state: {
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
    },
    mutations: {
        [INCREMENT](state) {
            state.counter++
        },
        decrement(state) {
           state.counter--
        },
        /* updatecounter(state,count) {
            state.counter += count
        }, */
        updatecounter(state,payload) {
            state.counter += payload.count
        },
        updateStu(state,stu) {
            state.students.push(stu)
        },
        /* updateInfo(state) {
            state.info['address'] = '固镇县'
        } */
        /* 使用Vue.set和Vue.delete进行的操作具备响应式 */
        updateInfo(state){
            state.info.name = 'mh'
        }
    },
    getters: {
        Powcounter(state) {
            return state.counter * state.counter
        },
        Moreage20(state) {
            return state.students.filter(s =>s.age > 30)
        },
        Moreage20Length(state,getters) {
            return getters.Moreage20.length
        },
        Moreage(state) {
            return function(age) {
                return state.students.filter(s => s.age >age)
            }
        }
    },
    actions: {
        updateInfo(context,payload) {
            setTimeout(() => {
                context.commit('updateInfo')
                console.log(payload.message);
                payload.success()
            },1000)
        }
    },
    modules: {
        a: moduleA
    }
})

export default store