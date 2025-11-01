<script setup>
import { getCategoryAPI } from '@/apis/Layout';
import { onMounted,ref } from 'vue';

const categoryList = ref([])
const getCategory=async()=>{
    const res=await getCategoryAPI()
    categoryList.value=res.result
}

//onMounted用于在组件挂载完成后执行代码的生命周期钩子，常用于初始化操作
//onMounted的参数必须是一个函数，最常见的就是箭头函数
onMounted(()=>getCategory())

</script>
<template>
    <header class="app-header">
        <div class="container">
            <h1 class="logo">
                <RouterLink to="/">小兔鲜</RouterLink>
            </h1>
            <ul class="app-header-nav">
                <li class="home" v-for="value in categoryList" :key="value.id">
                    <RouterLink to="/">{{ value.name }}</RouterLink>
                </li>
            </ul>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜一搜">
            </div>
            <!-- todo:购物车 -->
        </div>
    </header>
</template>

<style scoped lang="scss">
    .app-header{
        background: #fff;
        .container{
            display: flex;
            align-items: center;
            .logo{
                width: 200px;
                //RouteLink标签会渲染为a标签，注意这个地方不能写RouteLink标签，因为scss只认识css原生标签
                a{
                    //设为block，text-indent才能生效
                    display: block;
                    background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
                    //text-indent为缩进，设为 -9999px让小兔鲜这三个字不在网页中显示，在标签里写小兔鲜是因为方便网页关键字抓取
                    text-indent: -9999px;
                    height: 132px;
                    width: 100%;
                }
            }
            .app-header-nav{
                width: 820px;
                z-index: 998;
                padding-left: 40px;
                //配合 z-index: 998 提升导航层级，避免被其他元素遮挡
                position: relative;
                //display: flex只直接作用于子元素，所以要重新设置
                display: flex;
                li{
                    margin-right: 40px;
                    width: 38px;
                    text-align: center;
                    a{
                        font-size: 16px;
                        line-height: 32px;
                        height: 32px;
                        display: inline-block;
                        
                         &:hover {
                            color: $xtxColor;
                            border-bottom: 1px solid $xtxColor;
                        }
                        //标记 “当前活跃状态” 的导航项,简单举例说就是点击首页后首页会一直变色，直到点击下一个标签如居家。active要配合路由动态使用
                        .active {
                        color: $xtxColor;
                        border-bottom: 1px solid $xtxColor;
                        }
                    }
                }
            }
        }
    }
    .search{
        width: 170px;
        height: 32px;
        position: relative;
        border-bottom: 1px solid #e7e7e7;
        line-height: 32px;
        .icon-search {
            font-size: 18px;
            margin-left: 5px;
        }
        input {
            width: 140px;
            padding-left: 5px;
            color: #666;
        }
    }
    .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
</style>