import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/LogIn'
import Index1 from '@/components/Index1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index1
    },
    {
      path: '/:id',
      name: 'DigitizationPage',
      component: HelloWorld
    },
  ]
})
