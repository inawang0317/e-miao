<template>
  <div>
    <router-view />
  </div>
  
</template>

<script lang="ts" setup>
import { setHtmlTheme } from '@/utils'
import { useDesignStore } from '@/store/designStore/designStore'
// import { useDarkThemeHook, useThemeOverridesHook } from '@/hooks'
// import { darkTheme } from 'naive-ui'
// import type { GlobalTheme } from 'naive-ui'

// 暗黑主题
// const darkTheme = darkTheme
// const darkTheme = useDarkThemeHook()
// console.log(9909,darkTheme)

// 暗黑主题
// const darkTheme = useDarkThemeHook()

// 主题配置
// const overridesTheme = useThemeOverridesHook()
const designStore = useDesignStore()
designStore.changeTheme()
setHtmlTheme()
</script>
