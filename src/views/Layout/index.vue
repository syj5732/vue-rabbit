<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <LayoutNav/>
    <LayoutHeader/>
    <LayoutFooter/>
    <router-view/>
</template>
<script setup>
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
</script>
<style lang="scss" scoped></style>