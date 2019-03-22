import Vue from 'vue'
import Router from 'vue-router'
import Vlogin from '../components/account/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Vlogin
    }
  ]
})
