import { createRouter, createWebHistory } from 'vue-router'
import AddUser from '@/views/AddUser.vue'
import ListUser from '@/views/UserList.vue'


const routes = [
  {
    path: '/',
    name: 'add',
    component: AddUser
  },
  // Syntaxe classique de définition d'une route vers un composant view (page)
  {
    path: '/list',
    name: 'list',
    component: ListUser
  },
// Syntaxe pour le lazy loading d'un composant view (page)
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('@/views/UpdateUser.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
