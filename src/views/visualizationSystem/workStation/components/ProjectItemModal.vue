<template>
  <div>
    <el-dialog 
      style="overflow: hidden;"
      v-model="props.showModal" 
      :show-close="false" 
      width="80%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      top="4vh"
    >
      <template #header="{ titleId }">
        <div class="my-header">
          <ControlBtn
            :id="titleId"
            :hidden="['close']"
            :narrow="true"
            @remove="removeHanlde"
          >
          </ControlBtn>
          <p class="title-center">{{modalData.title || '默认项目'}}-{{modalData.label || '默认标签'}}</p>
        </div>
      </template>
      <div class="body-box">
        <el-image style="width: 96%;" :src="props.modalData.snapshot" fit="cover">
            <template #error>
              <div class="image-slot">
                <img :src='require("@/assets/commonBase/error/err_dark.svg")' v-if="!designStore.darkTheme">
                <img src="@/assets/commonBase/error/err_light.svg" v-else>
                <p>暂无图片</p>
              </div>
            </template>
          </el-image>
      </div>
      <template #footer>
        <div class="footer-box">
          <p>最后编辑：{{props.modalData.updateTime || '暂无'}}</p>
          <div class="op-box">
            <div class="release-status">
              <div class="go-animation-twinkle release-status-dot" :style="{backgroundColor: props.modalData.release ? '#67C23A' : '#E6A23C'}"></div>
              <p>{{props.modalData.release ? '已发布' : '未发布'}}</p>
            </div>
            <OperateBtn :isSignle="true" :operate="OperationType.EDIT" @edit="handleEdit"></OperateBtn>
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
  
</template>

<script lang="ts" setup>
  import { ChartType } from './const'
  import { ControlBtn } from '@/components/ControlBtn'
  import { OperateBtn } from '@/components/OperateBtn'
  import { useDesignStore } from '@/store/designStore/designStore'
  import { OperationType } from '@/components/OperateBtn/const'

  const designStore = useDesignStore()

  interface Props {
    showModal: boolean,
    modalData: ChartType | null
  }

  const props = withDefaults(defineProps<Props>(), {
    showModal: false,
    modalData: null
  })

  const emits = defineEmits(['close', 'resize', 'edit'])

  const removeHanlde = () => {
    emits('close')
  }
  const resizeHandle = () => {
    console.log('resizeHandle')
  }

  const handleEdit = () => {
    console.log(1212)
    emits('edit', props.modalData)
  }
</script>
<style lang="scss" scoped>
.my-header{
  position: relative;
  .title-center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.body-box{
  width: 100%;
  height: 90%;
  padding: 30px 10px;
  @include background-image('background-point');
  @extend .go-point-bg;
  @include flex-center-center;
}
.footer-box{
  @include flex-center-center;
  justify-content: space-between;
  .op-box{
    @include flex-center-center;
    justify-content: flex-end;
    font-size: 14px;
    .release-status {
      @include flex-center-center;
      justify-content: flex-start;
      &-dot{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}

:deep(.el-dialog__body){
  padding: 0 20px !important;
}
::v-deep .el-overlay-dialog{
  overflow: hidden;
}
</style>