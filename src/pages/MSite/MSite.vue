<!-- 外卖页面 -->
<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
        <!--首页导航-->
    <nav class="msite_nav">
          <div class="swiper-container" v-if="categorys.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                  <div class="food_container">
                    <img :src="baseImageUrl+category.image_url">
                  </div>
                  <span>{{category.title}}</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/msite_back.svg" alt="back" v-else/>
    </nav>
        <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import ShopList from "../../components/ShopList/ShopList";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "",
  components: {
    HeaderTop,
    ShopList
  },
  data() {
    return {
      //返回图片地址
      baseImageUrl: "https://fuss10.elemecdn.com"
    };
  },
  props: {},
  computed: {
    ...mapState(["address", "categorys"]),
    //根据categorys一维数组，生成一个二维数组
    //小数组中的元素个数最大的是8个.
    categorysArr() {
      const { categorys } = this;
      //准备空的两个数组
      const arr = []; //大的数组
      let minArr = []; //小的数组
      //遍历categorys
      categorys.forEach(c => {
        // 如果minArr是空的，就将小数组保存到大数组中去。
        if (minArr.length === 8) {
          minArr = []; //创建一个新的数组
        }
        // 如果当前小数组已满，就创建一个新的
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        minArr.push(c); //将当前分类保存到小数组中去
      });
      return arr;
    }
  },
  mounted() {
    //初始化HTML页面后加载执行
    //发起异步请求
    this.$store.dispatch("getCategorys");
    this.$store.dispatch("getShops");
  },
  methods: {},
  watch: {
    categorys(value) {
      //categorys中有数据了 ，在异步更新界面之前执行
      // setTimeout(() => {
      // }, 100);

      //界面更新就立即执行创建swiper对象
      this.$nextTick(() => {
        var myswiper = new Swiper(".swiper-container", {
          loop: true, //是否循环轮播
          autoplay: true, //可选选项，自动滑动
          autoplay: {
            delay: 5000 //5秒切换一次
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          },
          effect: "flip", //切换效果
          flipEffect: {
            slideShadows: true,
            limitRotation: true
          }
        });
      });
    }
  },
  created() {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins';

.msite { // 首页
  width: 100%;

  // 首页轮播
  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }

  // 商家商品列表
  .msite_shop_list {
    // top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;

      .shop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>