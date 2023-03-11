import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mealbyname from '../views/mealbyname.vue'
import mealbyletter from '../views/mealsByLetter.vue'
import searchBycategory from '../views/searchBycategory.vue'
import theMealbyCategory from '../views/theMealbyCategory.vue'
import theMealbyid from '../views/theMealByid.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/searchByName',
    name:'mealbyname',
    component: mealbyname,
  },
  {
    path:'/searchByLetter',
    name:'mealbyletter',
    component: mealbyletter,
  },
  {
    path:'/searchBycategory',
    name:'searchBycategory',
    component:searchBycategory,
  },
  {
    path:'/theMealbyCategory/:name',
    name:'theMealbyCategory',
    component: theMealbyCategory,
  },
  {
    path:'/theMealbyid/:id',
    name:'theMealbyid',
    component: theMealbyid,
    props:true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
