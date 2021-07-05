import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/auth'

Vue.use(VueRouter)

import Layout from '@/layout'

const routes = [{
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import ('@/views/Login.vue')
  },
  {
    path: '/home',
    // redirect: '/home',
    component: Layout,
    children: [{
        path: '/home',
        name: 'Home',
        component: () =>
          import ('@/views/Home.vue')
      }, {
        path: '/peopleInfo',
        name: 'PeopleInfo',
        component: () =>
          import ('@/views/information/PeopleInfo.vue')
      }, {
        path: '/workInfo',
        name: 'WorkInfo',
        component: () =>
          import ('@/views/information/WorkInfo.vue')
      },
      {
        path: '/backRequest',
        name: 'BackRequest',
        component: () =>
          import ('@/views/system/backRequest.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') return next()
  const hasToken = getToken()
  if (!hasToken) return next('/login')
  next()
})

export default router