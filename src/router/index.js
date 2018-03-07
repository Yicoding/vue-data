import Vue from 'vue'
import Router from 'vue-router'
// index.vue组件
import index from 'components/index'
import sign from 'components/sign'
import calendar from 'components/calendar'
import page from 'components/page'

// // 路由懒加载
// const index = () => import('components/index')
// const sign = () => import('components/sign')
// const calendar = () => import('components/calendar')
// const page = () => import('components/page')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: index },
    { path: '/index', component: index },
    { path: '/sign', component: sign },
    { path: '/calendar', component: calendar },
    { path: '/page/:page', name: 'page', component: page },
  ]
})
