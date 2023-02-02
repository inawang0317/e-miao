<template>
  <div class="project-item-box">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <ControlBtn 
            :hidden="['remove']"
            @close="deleteHanlde"
            @resize="resizeHandle">
          </ControlBtn>
          <div class="release-status">
            <div class="go-animation-twinkle release-status-dot" :style="{backgroundColor: cardData.release ? '#67C23A' : '#E6A23C'}"></div>
            <p>{{cardData.release ? '已发布' : '未发布'}}</p>
          </div>
        </div>
      </template>
      <div class="card-body">
        <el-image style="width: 230px; height: 180px" :src="cardData.snapshot" fit="cover">
          <template #error>
            <div class="image-slot">
              <img :src='require("@/assets/commonBase/error/err_dark.svg")' v-if="!designStore.darkTheme">
              <img src="@/assets/commonBase/error/err_light.svg" v-else>
              <p>暂无图片</p>
            </div>
          </template>
        </el-image>
        <div class="card-footer">
          <div>{{cardData.title}}</div>
          <div>
            <OperateBtn :isSignle="true" :operate="OperationType.Edit"></OperateBtn>
            <OperateBtn :isSignle="false" :operates="operates"></OperateBtn>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang='ts' setup>
  import { ControlBtn } from '@/components/ControlBtn'
  import { OperateBtn } from '@/components/OperateBtn'
  import { PropType } from 'vue'
  import { ChartType } from './const'
  import { useDesignStore } from '@/store/designStore/designStore'
  import { OperationType } from '@/components/OperateBtn/const'
  
  const emit = defineEmits(['delete', 'resize', 'edit'])

  const designStore = useDesignStore()

  const props = defineProps({
    cardData: Object as PropType<ChartType>
  })

  const operates = [
    OperationType.PREVIEW,
    OperationType.RENAME,
    OperationType.CLONE,
    props.cardData?.release ? OperationType.RENAME : OperationType.CANCLE_RELEASE,
    OperationType.DOWLOAD,
    OperationType.DELETE
  ]
  
  // 删除处理
  const deleteHanlde = () => {
    emit('delete', props.cardData)
  }

  // 编辑处理
  const editHandle = () => {
    emit('edit', props.cardData)
  }

  // 放大处理
  const resizeHandle = () => {
    emit('resize', props.cardData)
  }
</script>

<style lang="scss" scoped>
.project-item-box {
  width: 270px;
  height: 290px;
  .box-card {
    ::v-deep .el-card__body{
      padding: 10px;
    }
    .card-header {
      @include flex-center-center;
      justify-content: space-between;
      .release-status {
        @include flex-center-center;
        justify-content: flex-start;
        font-size: 14px;
        &-dot{
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 10px;
        }
      }
    }
    .card-body {
      width: 100%;
      height: 230px;
      @include flex-center-center;
      flex-direction: column;
      justify-content: flex-start;
      @include background-image('background-point');
      @extend .go-point-bg;
      ::v-deep .error-box{
        height: 100%;
      }
      .snapshot-img{
        width: 230px;
        height: 180px;
      }
      .image-slot{
        width: 100%;
        height: 100%;
        @include flex-center-center;
        flex-direction: column;
        img{
          width: 100px;
          height: 100px;
        }
        
      }
    }
  }
  
}
::v-deep .el-card__header{
  padding: 10px;
}
</style>