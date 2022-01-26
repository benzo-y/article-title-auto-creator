import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TitleCreater from '../views/TitleCreater.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/title_creater',
    name: 'TitleCreater',
    component: TitleCreater
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
