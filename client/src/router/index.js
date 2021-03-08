import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Todos from '@/components/Todos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todos
    }
  ]
})
