<template>
  <div>
    <h3>{{count}}</h3>
    <button @click="add">add+</button>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <h1>{{doneTodosCount}}</h1>
    <h2>{{getTodoById(1)}}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {

  // computed:{
  //   count(){
  //     return this.$store.state.count
  //   }
  // }

  // computed: mapState({
  //   // count: state => state.count,
  //   // countAlias: 'count',
  //   // countPlusLocalState(state){
  //   //   return state.count + this.localCount
  //   // }
  // })

  // computed:mapState([
  //   'count'
  // ])
  // TODO:三种写法
  computed:{
    ...mapState([
      'count'
    ]),
    //TODO:方法一
    // doneTodosCount(){
    //   return this.$store.getters.doneTodosCount
    // },
    // getTodoById(){
    //   return this.$store.getters.getTodoById
    // }
    // TODO:
    ...mapGetters([
      'doneTodosCount',
      'getTodoById'
    ])
  },
  methods:{
    ...mapMutations({
      increment:'increment',
      decrement:'DECREMENT'
    }),
    ...mapActions({
      add: 'increment' //将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  },
  

}
</script>

<style scoped>
  
</style>
