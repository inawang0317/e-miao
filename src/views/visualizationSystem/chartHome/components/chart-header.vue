<template>
  <div class="heaader-box">
    <div class="go-home" @click="openTipDialog">
      <el-icon><HomeFilled /></el-icon>
    </div>
    <div class="system-header">
      <ThemeSelect></ThemeSelect>
      <UserInfo></UserInfo>
    </div>
    <TipModal v-model="showGohomeModal"></TipModal>
  </div>
</template>

<script lang="ts" setup>
  import { ThemeSelect } from '@/components/ThemeSelect'
  import { UserInfo } from '@/components/UserInfo'
  import { TipModal } from '@/components/TipModal'
  import mixins from '@/utils/mixins'
  import { ref } from 'vue'

  const { goHome } = mixins()

  const showGohomeModal = ref(false)

  const openTipDialog = () => {
    showGohomeModal.value = true
  }
</script>

<style lang="scss" scoped>
.heaader-box{

}
</style>