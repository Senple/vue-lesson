import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Main from '../components/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    // component: Home
    name: 'main',
    components: {
      default: Main,
      sub: Article
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sample',
    name: 'Sample',
    component: () => import('../views/sample.vue')
  },
  {
    path: '/article/:aid',
    name: 'article',
    component: Article
  },
  // {
  //   path: "/",
  //   name: 'main',
  //   components: {
  //     default: Main,
  //     sub: Article
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
