import Vue from 'vue'
import Router from 'vue-router'
// // index.vue组件
// import index from 'components/index'
// import sign from 'components/sign'
// import calendar from 'components/calendar'
// import page from 'components/page'
// import picture from 'components/picture'
// import echarts from 'components/echarts'
// import sock from 'components/sock'

// 路由懒加载
const index = () => import('components/index')
const sign = () => import('components/sign')
const calendar = () => import('components/calendar')
const page = () => import('components/page')
const picture = () => import('components/picture')
const echarts = () => import('components/echarts')
const sockjs = () => import('components/sockjs')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: index },
    { path: '/sign', component: sign },
    { path: '/calendar', component: calendar },
    { path: '/page/:page', name: 'page', component: page },
    { path: '/picture', component: picture },
    { path: '/echarts', component: echarts },
    { path: '/sockjs', component: sockjs },
  ]
})
