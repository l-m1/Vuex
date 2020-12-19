export default {
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
}