<template>
  <div style="height: 100%;">
    <router-view />
  </div>
  
</template>

<script lang="ts" setup>
  import { setHtmlTheme } from '@/utils'
  import { useDesignStore } from '@/store/designStore/designStore'
  import { getLocalStorage } from '@/utils'
  import { StorageEnum } from '@/enums/storageEnum'
  import { ThemeEnum } from '@/enums/styleEnum'

  const { GO_DESIGN_STORE } = StorageEnum

  const storageDesign = getLocalStorage(GO_DESIGN_STORE)
  const designStore = useDesignStore()
  let themeName: ThemeEnum = ThemeEnum.DARK
  if (storageDesign && storageDesign.themeName) {
    themeName = storageDesign.themeName
  }
  designStore.setTheme(themeName)
  setHtmlTheme(themeName)
</script>
