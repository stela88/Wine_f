import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pocetna',
    component: () => import('../views/Pocetna.vue'),
    meta: {
      hideNavbar: true,
     }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/kosarica',
    name: 'Kosarica',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Kosarica.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
