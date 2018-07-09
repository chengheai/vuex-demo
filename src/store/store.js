import Vue from 'vue'
import Vuex from 'vuex'
import { DECREMENT } from "./mutation-types";

Vue.use(Vuex)

export const store =new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {id:1,text:'text1', done: true},
      {id:2,text:'text2', done: false}
    ]
  },
  getters:{
    doneTodos: state =>{
      return state.todos.filter(todo =>todo.done)
    },
    doneTodosCount: (state, getters) =>{
      return getters.doneTodos.length
    },
    getTodoById: (state) =>(id) =>{
      return state.todos.find(todo =>todo.id === id)
    }
  },
  mutations: {
    // 加1
    increment(state) {
      state.count++;
    },
    // 减1
    [DECREMENT](state) {
      state.count--
    }
  },
  // actions:{
  //   increment(context){
  //     context.commit('increment')
  //   }
  // },
  // 简写
  actions:{
    increment({ commit }){
      commit('increment')
    }
  }

})