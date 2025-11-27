<!-- eslint-disable vue/multi-word-component-names -->
 <script setup>
import HomeCategory from './HomeCategory.vue';
import HomeBanner from './HomeBanner.vue';
import HomeNew from './HomeNew.vue';
import HomeHot from './HomeHot.vue';
import HomeProduct from './HomeProduct.vue';
import HomePanel from './HomePanel.vue';
</script>

<template>
    <div class="container">
        <HomeCategory/>
        <HomeBanner/>
    </div>
    <HomeNew/>
    <HomeHot/>
    <HomeProduct/>
    <HomePanel title="人气推荐" sub-title="人气推荐 好多商品">
        <div>2</div>
    </HomePanel>
</template>