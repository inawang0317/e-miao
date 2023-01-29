<template>
  <div class="login-box">
    <div class="top-options">
      <ThemeSelect></ThemeSelect>
    </div>
    <div class="main-content"></div>
  </div>
</template>

<script lang="ts" setup>
import { ThemeSelect } from '@/components/ThemeSelect'
</script>

<style lang="scss" scoped>
$width: 450px;
$go-login-height: 100vh;

.login-box{
  height: $go-login-height;
  overflow: hidden;
  @include get-background-image('background-image');
  .top-options{
    width: 100%;
  }
}
</style>