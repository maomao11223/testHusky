<script setup>
import { computed, shallowRef } from 'vue'
import { RouterView } from "vue-router";
import DefaultLayout from '@/layout/default.vue'
import AdminLayout from '@/layout/admin.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const currentLayout = shallowRef(DefaultLayout)

const layout = computed(() => {
  console.log("��� ~ file: App.vue:5 ~ computed:layout:", route)
  if (route.meta) {

    currentLayout.value = route.meta.layout == "AdminLayout" ? AdminLayout : DefaultLayout
    return currentLayout
  } return DefaultLayout
}) 
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

 