import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Member from '../views/Member/Member.vue'

import 'bootstrap/dist/css/bootstrap.css';

import {gsap} from 'gsap';


Vue.use(VueRouter)

Vue.prototype.$gsap = gsap;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/member",
    name: "member",
    component : Member
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
