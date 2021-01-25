import Vue from 'vue'
import router from './router'
import firebase from 'firebase'
import moment from 'moment'

import '!script!jquery/dist/jquery.min.js'
import '!script!semantic-ui-css/semantic.min.js'
import '!style!css!semantic-ui-css/semantic.min.css'

import App from './App'

firebase.initializeApp({
  apiKey: 'AIzaSyAKGCp8OpgD09_FCcfI6OhyKSryqKvzoBc',
  authDomain: 'my-twitty.firebaseapp.com',
  databaseURL: 'https://my-twitty.firebaseio.com',
  storageBucket: 'my-twitty.appspot.com',
  messagingSenderId: '498718998879'
})

Vue.filter('upper', (value) => {
  if (typeof value === 'string') {
    return value.toUpperCase()
  }
  return value
})

const ticker = new Vue({
  data: () => ({
    tick: 0
  }),
  created () {
    setInterval(() => {
      this.tick = Date.now()
    }, 10000)
  }
})

Vue.filter('fromNow', (value) => {
  ticker.tick
  return moment(value).fromNow()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
