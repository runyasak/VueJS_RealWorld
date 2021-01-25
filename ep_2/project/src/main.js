/* VUE TOOLS */
import Vue from 'vue'
/* COMPONENTS */
import App from './App'
import { router } from './router'
/* SCRIPT */
import '!style!css!bulma/css/bulma.css'

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
