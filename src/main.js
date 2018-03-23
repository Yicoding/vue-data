// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue
import Vue from 'vue'
// 引入vue的根组件
import App from './App'
// 引入vue路由
import router from './router'
// 引入vuex(全局状态管理)
import store from './store'
// 引入PC端element-ui框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // ccs部分
Vue.use(ElementUI)
// 引入移动端mini-ui框架
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css' // css部分
Vue.use(MintUI)
// 引入weui(使用h5拍照上传功能)
import 'weui';
import weui from 'weui.js';
Vue.prototype.weui = weui
// 解决浏览器不支持promise语法(针对axios封装的ajax请求低版本浏览器不支持promise语法)
import _promise from 'es6-promise'
_promise.polyfill()

// 引入axios(基于promise封装的ajax)
import axios from 'axios'
// 修改vue原型，讲axios配置在vue原型中，在项目中使用this.$http代替axios
Vue.prototype.$http = axios

// 引入echarts图表
import echarts from 'echarts'
Vue.prototype.echarts = echarts

// 全局引入日历组件
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'
// Vue.use(vueEventCalendar, {locale: 'en', color: '#69c'})
Vue.use(vueEventCalendar, {locale: 'en'})

// 引入自定义样式
import 'assets/css/index.scss'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
// 在js里面，new 一个对象，需要赋值给某个值（变量），用Vue实例化的时候，不需要赋值给值（变量），所以要单独给配一条规则，给new Vue这行代码上面加这个注释，把这行代码规则的校验跳过，通过eslint-disable。eslint的常用技巧之一
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
