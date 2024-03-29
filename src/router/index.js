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
    path: '/Sort',
    name: 'Sort',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sort.vue')
  },
  {
    path: '/Kosarica',
    name: 'Kosarica',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Kosarica.vue')
  },
  {
    path: '/Malvazija',
    name: 'Malvazija',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Malvazija.vue')
  },
  {
    path: '/Chardonnay',
    name: 'Chardonnay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Chardonnay.vue')
  },
  {
    path: '/Rose',
    name: 'Rose',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Rose.vue')
  },
  {
    path: '/Teran',
    name: 'Teran',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Teran.vue')
  },
  {
    path: '/Brut',
    name: 'Brut',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Brut.vue')
  },
  {
    path: '/Cabernet_Sauvignon',
    name: 'Cabernet_Sauvignon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cabernet_Sauvignon.vue')
  },
  {
    path: '/Merlot',
    name: 'Merlot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Merlot.vue')
  },
  {
    path: '/Bijelo',
    name: 'Bijelo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Bijelo.vue')
  },
  {
    path: '/Crno',
    name: 'Crno',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Crno.vue')
  },
  {
    path: '/RoseSort',
    name: 'RoseSort',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RoseSort.vue')
  },
  {
    path: '/Temp5-7',
    name: 'Temp5-7',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Temp5-7.vue')
  },
  {
    path: '/Temp6-8',
    name: 'Temp6-8',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Temp6-8.vue')
  },
  {
    path: '/Temp16-18',
    name: 'Temp16-18',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Temp16-18.vue')
  },
  {
    path: '/CheckoutForm',
    name: 'CheckoutForm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckoutForm.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
