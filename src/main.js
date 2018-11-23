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
// 引入Chart.js图表
import Chart from 'chart.js'
// 全局引入日历组件
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'
// Vue.use(vueEventCalendar, {locale: 'en', color: '#69c'})
Vue.use(vueEventCalendar, {locale: 'en'})

// 引入vueg转场动画
import vueg from 'vueg'
import 'vueg/css/transition-min.css'
const options = {
  duration: '0.3', //转场动画时长，默认为0.3，单位秒
  firstEntryDisable: false, //值为true时禁用首次进入应用时的渐现动画，默认为false
  firstEntryDuration: '.6', //首次进入应用时的渐现动画时长，默认为.6
  forwardAnim: 'fadeInRight', //前进动画，默认为fadeInRight
  backAnim: 'fadeInLeft', //后退动画，默认为fedeInLeft
  sameDepthDisable: false, //url深度相同时禁用动画，默认为false
  tabs: [{
    name: 'home'
  },{
    name: 'my'
  }], //默认为[]，'name'对应路由的name,以实现类似app中点击tab页面水平转场效果，如tabs[1]到tabs[0]    ，会使用backAnim动画，tabs[1]到tabs[2]，会使用forwardAnim动画
  tabsDisable: false, //值为true时，tabs间的转场没有动画，默认为false
  shadow: true, //值为false，转场时没有阴影的层次效果
  disable: false, //禁用转场动画，默认为false，嵌套路由默认为true
  nuxt: false //若使用后端渲染框架Nuxt，需要将此设为true，默认为false
}    
Vue.use(vueg, router, options) //←注意这一句应该在router实例化之后
// 引入自定义样式
import 'assets/css/index.scss'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

// 自定义指令
Vue.directive('focus', {
  inserted: (el) => {
    el.focus()
  } 
})


/* eslint-disable no-new */
// 在js里面，new 一个对象，需要赋值给某个值（变量），用Vue实例化的时候，不需要赋值给值（变量），所以要单独给配一条规则，给new Vue这行代码上面加这个注释，把这行代码规则的校验跳过，通过eslint-disable。eslint的常用技巧之一
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
