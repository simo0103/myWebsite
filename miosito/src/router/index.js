import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: './menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: './about',
      name: 'About',
      component: About
    }
  ]
})
