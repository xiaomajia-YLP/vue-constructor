import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import routes from './router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router
