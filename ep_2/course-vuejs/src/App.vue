<template>
  <div id="app">
    App Component
    <br />
    <router-link to="/" tag="div">Home</router-link>
    <br />
    <router-link to="/about" tag="div.about">About</router-link>
    <br />
    <router-view></router-view>
    <br />
  </div>
</template>

<script>
export default {

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
