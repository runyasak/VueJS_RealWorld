<template>
  <div class="ui menu">
    <router-link to="/" class="header item">Home</router-link>
    <div class="right menu">
      <router-link v-if="currentUser" to="/profile" class="item">Profile</router-link>
      <router-link v-if="currentUser" to="/user/1" class="item">User 1</router-link>
      <div v-if="currentUser" @click="signOut" class="link item">Sign Out</div>
      <router-link v-else to="/signin" class="item">Sign In</router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    currentUser: null
  }),
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('current user:', user)
      this.currentUser = user
    })
  },
  methods: {
    signOut () {
      firebase.auth().signOut()
      this.$router.push('/')
    }
  }
}
</script>