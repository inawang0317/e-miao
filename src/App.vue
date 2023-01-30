<template>
  <div>
    <router-view />
  </div>
  
</template>

<script lang="ts" setup>
  import { setHtmlTheme } from '@/utils'
  import { useDesignStore } from '@/store/designStore/designStore'

  const designStore = useDesignStore()
  designStore.changeTheme()
  setHtmlTheme()
</script>
<style>
body{
  margin: 0;
  padding: 0;
}
</style>
