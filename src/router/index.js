import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/Views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'API列表 | Gaein nidb 的网站'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
