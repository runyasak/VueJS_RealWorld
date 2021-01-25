<template>
  <div id="app">
    <nav-bar :user_name="user_name.toUpperCase()"></nav-bar>
    <transition name='slide-fade'>
      <router-view :user_name="user_name"></router-view>
    </transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: { NavBar },
  data () {
    return {
      user_name: 'Runyasak'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
  transition-delay: .3s;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>
