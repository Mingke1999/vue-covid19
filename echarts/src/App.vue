<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ShowMap msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ShowMap from './components/ShowMap.vue'

export default {
  name: 'App',
  components: {
    ShowMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
