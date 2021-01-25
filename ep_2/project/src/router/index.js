/* VUE TOOLS */
import Vue from 'vue'
import VueRouter from 'vue-router'
/* COMPONENTS */
import Home from '../components/Home'
import Profile from '../components/Profile'

Vue.use(VueRouter)

export const routes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '*', redirect: '/' }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
