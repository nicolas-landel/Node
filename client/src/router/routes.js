import { createWebHistory, createRouter } from 'vue-router'
import Homepage from '@/components/Homepage'
import Tab from '@/components/Tab'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/todos',
    name: 'todos',
    component: Tab
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