import { createWebHistory, createRouter } from 'vue-router'
import Homepage from '@/components/Homepage'
import Todos from '@/components/Todos'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/todos',
    name: 'todos',
    component: Todos
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/"
  },
]


// export default new Router({
//   history: VueRouter.createWebHashHistory(),
//   routes
// })

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router