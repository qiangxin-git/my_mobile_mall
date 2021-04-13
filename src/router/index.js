import {createRouter, createWebHistory} from 'vue-router'

const  Home = ()=> import('../views/home/Home')
const  Categary = ()=> import('../views/categary/Categary')
const  Profile = ()=> import('../views/profile/Profile')
const  Shopcart = ()=> import('../views/shopcart/Shopcart')
const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/categary',
    component: Categary
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: Shopcart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
