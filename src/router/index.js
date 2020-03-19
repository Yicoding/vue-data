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
// import modal from 'components/modal'
// import chart from 'components/chart'
// import config from 'components/config'
// import bus from 'components/bus'

// 路由懒加载
const index = () => import('components/index')
const sign = () => import('components/sign')
const book = () => import('components/book')
const calendar = () => import('components/calendar')
const page = () => import('components/page')
const picture = () => import('components/picture')
const echarts = () => import('components/echarts')
const sockjs = () => import('components/sockjs')
const modal = () => import('components/modal')
const chart = () => import('components/chart')
const config = () => import('components/config')
const bus = () => import('components/bus')
const slot = () => import('components/slot')
const hander = () => import('components/info/hander')
const swiper = () => import('components/swiper')
const password = () => import('components/password')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/book' },
    { path: '/book', component: book },
    { path: '/index', component: index },
    { path: '/sign', component: sign },
    { path: '/calendar', component: calendar },
    { path: '/page/:page', name: 'page', component: page },
    { path: '/picture', component: picture },
    { path: '/echarts', component: echarts },
    { path: '/sockjs', component: sockjs },
    { path: '/modal', component: modal },
    { path: '/chart', component: chart },
    { path: '/config', component: config },
    { path: '/bus', component: bus },
    { path: '/slot', component: slot },
    { path: '/hander', component: hander },
    { path: '/swiper', component: swiper },
    { path: '/password', component: password },
  ]
})
