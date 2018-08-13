import Vue from 'vue'
import Router from 'vue-router'
// 引入路由组件
// import MSite from '../pages/MSite/MSite.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
// import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
// 引入路由的第二种方法（路由组件懒加载）
const MSite = () => import('../pages/MSite/MSite')
const Profile = () => import('../pages/Profile/Profile.vue')
const Order = () => import('../pages/Order/Order.vue')
const Search = () => import('../pages/Search/Search.vue')
Vue.use(Router)
/* eslint-disable */
export default new Router({
  routes: [{
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    // 默认选中进去
    {
      path: '/',
      redirect: '/msite'
    },
    // 商家菜单路由
    {
      path: '/shop',
      component: Shop,
      children: [{
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/info',
          component: ShopInfo
        }, {
          path: '/shop/ratings',
          component: ShopRatings
        }, {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },
  ]
})
