// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer' // 加载mockServer
import VueLazyload from 'vue-lazyload'  //引入图片懒加载
import loading from './common/imgs/loading.gif'
import './fiters' // 加载时间过滤器
import {Button} from 'mint-ui'
Vue.use(VueLazyload,{
  error:'static/images/1.jpg',
  loading,
})
Vue.component(Button.name, Button)  // <mt-button>
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router, // 使用 vue-router
  store,  //使用vuex
  components: { App },
  template: '<App/>'
})
