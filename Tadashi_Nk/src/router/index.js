import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import BookListView from '../views/BookListView.vue'
import BookUpdateView from '../views/BookUpdateView.vue'
import TodoHomeView from '../views/TodoHomeView.vue'
import TodoEditView from '../views/TodoEditView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/booklist',
      name: 'book-list',
      component: BookListView
    },
    {
      path: '/book/create',
      name: 'book-create',
      component: BookUpdateView
    },
    {
      path: '/book/edit/:id',
      name: 'book-edit',
      component: BookUpdateView
    },
    {
      path: '/todo',
      name: 'todo-list',
      component: TodoHomeView
    },
    {
      path: '/todo/edit/:id',
      name: 'todo-edit',
      component: TodoEditView
    }


  ]
})

export default router
