/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'

Vue.use(Router)

export const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      meta: {
        title: '窝里'
      },
      component: () => import('@/components/main/Home')
    },
    {
      path: '/how-long',
      name: 'HowLong',
      meta: {
        title: '活了多久'
      },
      component: () => import('@/components/main/HowLong')
    },
    {
      path: '/resume',
      name: 'Resume',
      meta: {
        title: '个人简历'
      },
      component: () => import('@/components/main/Resume')
    },
    {
      path: '/feedback',
      name: 'Feedback',
      meta: {
        title: '意见反馈'
      },
      component: () => import('@/components/main/Feedback')
    },
    {
      path: '/other',
      name: 'Other',
      meta: {
        title: '其他'
      },
      component: () => import('@/components/main/Other')
    },
    {
      path: '/calculator',
      name: 'Calculator',
      meta: {
        title: '计算'
      },
      component: () => import('@/components/main/Calculator')
    },
    {
      path: '/pwd-generator',
      name: 'PWDGenerator',
      meta: {
        title: '密码生成器'
      },
      component: () => import('@/components/main/PWDGenerator')
    },
    {
      path: '/recursive',
      name: 'Recursive',
      meta: {
        title: '递归练习'
      },
      component: () => import('@/components/main/Recursive')
    }

  ]
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  iView.LoadingBar.start()

  next()
})
router.afterEach((to, from) => {
  iView.LoadingBar.finish()

  window.scrollTo(0, 0)
})

