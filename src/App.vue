<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <Counter />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
