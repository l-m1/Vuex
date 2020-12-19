<template>
  <div id="app">
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname1}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>

    <button @click="asyncUpdatename">更新名字</button>

    <h2>{{$store.state.info}}</h2>
    <h1>App组件</h1>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">添加学生</button>
    <button @click="updateInfo">改变信息</button>
    <!-- <button @click="counter++">+</button>
    <button @click="counter--">-</button> -->
    <demo></demo>
  </div>
</template>

<script>
import demo from './components/Demo.vue'

import {INCREMENT} from './store/simple.js'

export default {
  name: 'App',
  components: {
    demo
  },
  methods: {
    add() {
      this.$store.commit(INCREMENT)
    },
    sub() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      //普通提交风格
      //this.$store.commit('updatecounter',count)
      //特殊提交风格
      this.$store.commit({
        type: 'updatecounter', //对应事件类型
        count
      })
    },
    addStu() {
      const stu = {id:114,name: '张三',age: 44}
      this.$store.commit('updateStu',stu)
    },
    updateInfo() {
      this.$store.commit('updateInfo')
    },
    updateInfo() {
      this.$store.dispatch('updateInfo',{
        message: '我携带的信息',
        success: () => {
          console.log("里面执行完毕")
        }
      })
    },
    updateName(state) {
      this.$store.commit('updateName','kitty')
    },
    asyncUpdatename() {
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script> 

<style>

</style>
