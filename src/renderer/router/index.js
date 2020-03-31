/*
 * @Author: Caven
 * @Date: 2019-12-23 13:38:32
 * @Last Modified by: Caven
 * @Last Modified time: 2020-03-31 13:05:36
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
