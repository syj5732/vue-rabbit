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
</script>
<style lang="scss" scoped></style>