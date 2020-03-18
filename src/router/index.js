import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RC1 from '../views/RC1.vue'
import RC2 from '../views/RC2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rc1',
    name: 'RC1',
    component: RC1
  },
  {
    path: '/rc2',
    name: 'RC2',
    component: RC2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
