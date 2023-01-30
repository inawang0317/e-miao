<template>
  <div class="theme-select-box">
    <div @click="changeTheme" :class="designStore.darkTheme ? 'dark-select' : 'light-select'" class="select-base">
      <el-icon v-if="!designStore.darkTheme" :size="20"><Sunny /></el-icon>
      <el-icon v-else :size="20"><Moon /></el-icon>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { useDesignStore } from '@/store/designStore/designStore'
import { setHtmlTheme } from '@/utils'


const designStore = useDesignStore()

// 改变样式
const changeTheme = () => {
  designStore.changeTheme()
  setHtmlTheme()
}
</script>

<style lang="scss" scoped>
.theme-select-box {
  cursor: pointer;
  .select-base {
    @include flex-center-center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 8px;
  }
  .dark-select {
    background-color: $--color-dark-bg-1;
    color: $--color-light-bg;
  }
  .dark-select:hover {
    background-color: lighten($--color-dark-bg-1, $--light-shalow * 3);
    box-shadow: 0px 0px 10px 6px  #17416d;
  }
  .light-select {
    background-color: $--color-light-bg;
    color: $--color-dark-bg-1;
  }
  .light-select:hover {
    background-color: darken($--color-light-bg, $--dark-shalow * 3);
    box-shadow: 0px 0px 10px 6px   #f8d8a9;
  }
}
</style>