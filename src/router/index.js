import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import(/* webpackChunkName: "usuarios" */ '../components/usuarios.vue')
  },
  {
    path: '/usuarios-dados',
    name: 'usuarios-dados',
    component: () => import(/* webpackChunkName: "usuarios-dados" */ '../components/usuarios-dados.vue')
  },
  {
    path: '/usuarios-modal',
    name: 'usuarios-modal',
    component: () => import(/* webpackChunkName: "usuarios-modal" */ '../components/usuarios-modal.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
