import {INCREMENT} from './simple.js'

export default {
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
}
