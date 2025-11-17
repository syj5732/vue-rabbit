<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <LayoutFixed/>
    <LayoutNav/>
    <LayoutHeader/>
    <router-view/>
    <div style="height: 1200px;"></div>
    <LayoutFooter/>
</template>
<script setup>
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutFixed from './components/LayoutFixed.vue';
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';

//向store请求封装好的列表数据
const categoryStore=useCategoryStore()
//onMounted用于在组件挂载完成后执行代码的生命周期钩子，常用于初始化操作
//onMounted的参数必须是一个函数，最常见的就是箭头函数
onMounted(()=>categoryStore.getCategory())
</script>
<style lang="scss" scoped></style>