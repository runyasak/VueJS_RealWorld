import Vue from 'vue'
import router from './router'
import firebase from 'firebase'

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
