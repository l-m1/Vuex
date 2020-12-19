<template>
    <div>
        <h1>子组件</h1>
        <h2>{{$store.state.counter}}</h2>
        <h2>{{$store.getters.Powcounter}}</h2>
        <h2>{{$store.getters.Moreage20}}</h2>
        <h2>{{$store.getters.Moreage20.length}}</h2>
        <h2>{{$store.getters.Moreage20Length}}</h2>
        <h2>{{$store.getters.Moreage(20)}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Demo',
    props: {
        counter: Number  
    }
}
</script>

<style scoped>

</style>