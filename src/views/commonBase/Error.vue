<template>
  <div class="error-box">
    <div>
      <img src="@/assets/commonBase/error/err_dark.svg" v-if="!designStore.darkTheme">
      <img src="@/assets/commonBase/error/err_light.svg" v-else>
    </div>
    <div>{{errMsg}}</div>
  </div>
</template>

<script lang="ts" setup>
  import { useDesignStore } from '@/store/designStore/designStore'
  import { useRouter } from 'vue-router'

  const designStore = useDesignStore()
  const { currentRoute: { value: { query: { code: errCode } } } } = useRouter()

  const getErrMsg = (code: number): string => {
    const errCodeMap: Record<number, string>  = {
      404: '页面没有找到呀～',
      500: '内部服务器出错咯～',
      403: '没有访问权限哦～'
    }
    const msg = errCodeMap[code]
    if (msg) {
      return msg
    }
    return '出错咯～'
  }

  const errMsg = getErrMsg(Number(errCode))


</script>

<style lang="scss" scoped>
.error-box{
  width: 100%;
  height: 100vh;
  @include flex-center-center;
  flex-direction: column;
}
</style>