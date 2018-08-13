<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
/* eslint-disable */
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import {reqFoodTypes, reqFoodCategorys} from './api'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  //两种请求数据的方法
  mounted () {
    // const result = await reqFoodCategorys()
    // console.log(result)
    
    this.$store.dispatch('getShops');//请求方式之一
    this.getAddress();
  },
  methods: {
    ...mapActions(['getAddress']) //请求方式二
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  heigh 100%
  background #f5f5f5  //设置顶部栏背景颜色
</style>

