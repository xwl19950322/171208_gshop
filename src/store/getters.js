/* eslint-disable */
// 包含多个基于state的getter计算属性的对象
export default {
  totalCount(state) {
    // 计算加入购物车的食品数量
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
  },
  totalPrice(state) {
    // 计算加入购物车的食品价格
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
  },
  positiveSize(state) {
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0), 0)
  }
}
