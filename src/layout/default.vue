<script setup>
import routerDatas from "@/router/routerData.json"
console.log('layout.', routerDatas)
</script>
<template>
    <ul style="display:flex;list-style:none">
        <li v-for="menu in routerDatas.menu" :key="menu.name" style="margin-right:20px">{{ menu.meta.title }} |</li>
    </ul>
    <slot></slot>
</template>


<style lang="scss" scoped></style>