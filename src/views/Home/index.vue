<!-- eslint-disable vue/multi-word-component-names -->
 <script setup>
import HomeCategory from './HomeCategory.vue';
import HomeBanner from './HomeBanner.vue';
import HomeNew from './HomeNew.vue';
import HomeHot from './HomeHot.vue';
import HomeProduct from './HomeProduct.vue';
</script>

<template>
    <div class="container">
        <HomeCategory/>
        <HomeBanner/>
    </div>
    <HomeNew/>
    <HomeHot/>
    <HomeProduct/>
</template>