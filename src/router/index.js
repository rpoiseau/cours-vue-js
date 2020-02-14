import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: "Home",
    component: Home,
    children: [
      {
        path: '',
        name: 'Child1',
        component: () => import('../components/HomeChild1')
      },
      {
        path: '/home/child2',
        name: 'Child2',
        component: () => import('../components/HomeChild2')
      }
    ]
  },
  {
    path: '/about/:id',
    name: 'About',
    component: () => import( '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // Add guardroute for each routes
  console.log(to, from, next);
  next();
});
export default router
