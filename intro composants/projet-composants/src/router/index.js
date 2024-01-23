import { createRouter, createWebHistory } from 'vue-router'
import AddUser from '@/views/AddUser.vue'

const routes = [
  {
    path: '/',
    name: 'add',
    component: AddUser
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
