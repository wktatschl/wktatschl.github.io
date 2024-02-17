import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import MyWork from '../views/MyWork.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about-me',
    name: 'about-me',
    component: AboutMeView
  },
  {
    path: '/my-work',
    name: 'my-work',
    component: MyWork
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
