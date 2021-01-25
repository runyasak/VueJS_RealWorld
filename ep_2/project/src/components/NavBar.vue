<template lang="html">
  <nav class="nav">
    <div class="nav-left">
      <!-- <span class="nav-item title home-logo" v-link="{ path: '/' }">TWITTY</span> -->
      <router-link to="/" tag="span" class="nav-item title home-logo">TWITTY</router-link>
    </div>
    <div class="nav-right items-center">
      <!-- <a class="nav-item title is-5">{{user_name}}</a> -->
      <router-link to="/profile" tag="a" class="nav-item">
        <avatar :avatar_size="32"></avatar>
        <span class="user-name title is-5">{{user_name}}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import Avatar from './Avatar'

export default {
  props: ['user_name'],
  components: { Avatar }
}
</script>

<style lang="scss" scoped>
  .nav {
    margin-bottom: 40px;
  }
  .home-logo {
    cursor: pointer;
  }
  .user-name {
    margin: 0px 10px;
    margin-top: 4px;
  }
</style>
