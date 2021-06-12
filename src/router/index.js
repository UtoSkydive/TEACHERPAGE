import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sobremi',
    name: 'Sobremi',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sobremi.vue')
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: () => import(/* webpackChunkName: "galeria" */ '../views/Galeria.vue')
  },
  {
    path: '/contact',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router