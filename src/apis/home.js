import httpInstance from "@/utils/http";
//获取banner
export function getBannerAPI(option={}){//option={}默认值为{}
  //解构语法{ distributionSite = '1' }表示：从 options 对象中提取 distributionSite 属性时：如果 options 中有这个属性，就用它的值；如果 options 中没有这个属性（或属性值为 undefined），就用默认值 '1'。
    const {distrubutionSite='1'}=option
    return httpInstance({
        url:'/home/banner',
        params:{
          //命名与赋值必须与后端接口参数保持一致
          distrubutionSite
        }
    })
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance({
    url:'/home/hot'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}