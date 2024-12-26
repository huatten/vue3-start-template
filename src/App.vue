<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <message-api></message-api>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import MessageApi from '@/plugins/MessageApi.vue'
const themeOverrides = {
  common: {
    primaryColor: '#0357E2', // 基础主色调
    primaryColorHover: '#366ef4', // 基础色hover
  },
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  .n-config-provider {
    width: 100%;
    height: 100%;
  }
}
</style>
